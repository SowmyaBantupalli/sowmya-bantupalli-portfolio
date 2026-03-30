const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 w-full max-w-4xl px-4">
        <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse w-3/4 mx-auto" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse w-1/2 mx-auto" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse w-2/3 mx-auto" />
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
