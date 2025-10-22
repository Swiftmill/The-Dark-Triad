export const CenterLines = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative h-full w-full max-w-5xl">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
      </div>
    </div>
  );
};
