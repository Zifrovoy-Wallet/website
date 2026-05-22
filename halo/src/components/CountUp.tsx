import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface Parsed {
  prefix: string;
  num: number;
  suffix: string;
  decimals: number;
}

function parseValue(v: string): Parsed {
  const m = v.match(/^([^\d.-]*)(-?[\d.]+)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: v, decimals: 0 };
  const numStr = m[2];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix: m[1],
    num: parseFloat(numStr),
    suffix: m[3],
    decimals,
  };
}

export function CountUp({
  value,
  duration = 1500,
  className,
  style,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const parsed = parseValue(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(parsed.num * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed.num, duration]);

  const display = current.toLocaleString(undefined, {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
  });

  return (
    <span ref={ref} className={className} style={style}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
