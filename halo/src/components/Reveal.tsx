import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** translateY pixels before reveal */
  y?: number;
  /** transition duration in ms */
  duration?: number;
  style?: CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
  duration = 700,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
