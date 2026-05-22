interface LoaderProps {
  visible: boolean;
}

export function Loader({ visible }: LoaderProps) {
  return (
    <div
      aria-hidden={!visible}
      role="status"
      className="bg-page"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 500ms cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/logo.png"
          alt=""
          className="w-14 h-14 loader-pulse"
          style={{ filter: "brightness(0)" }}
        />
        <span
          className="text-black text-xl font-medium tracking-tight"
          style={{ letterSpacing: "-0.02em", opacity: 0.85 }}
        >
          Zifrovoy
        </span>
      </div>
      <style>{`
        @keyframes loader-pulse {
          0%, 100% { opacity: 0.45; transform: scale(0.96); }
          50%      { opacity: 1;    transform: scale(1); }
        }
        .loader-pulse {
          animation: loader-pulse 1.4s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .loader-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
