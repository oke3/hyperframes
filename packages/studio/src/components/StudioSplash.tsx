const DEPLOY_TARGET = typeof import.meta !== "undefined" ? import.meta.env.VITE_HF_DEPLOY_TARGET : undefined;
const isGhPages = DEPLOY_TARGET === "gh-pages";

export function StudioSplash({ waiting }: { waiting?: boolean }) {
  return (
    <div className="h-full w-full bg-neutral-950 flex items-center justify-center">
      {waiting ? (
        <div className="flex flex-col items-center gap-3 text-center px-6">
          <div className="w-4 h-4 rounded-full border-2 border-neutral-700 border-t-neutral-500 animate-spin" />
          {isGhPages ? (
            <div className="flex flex-col gap-3 max-w-sm">
              <p className="text-xs text-neutral-500 leading-relaxed">
                This is a static demo of the HyperFrames Studio UI. The preview
                server is not available on this deployment.
              </p>
              <p className="text-xs text-neutral-600">
                For the full Studio experience, clone the repo and run{" "}
                <code className="text-neutral-500 font-mono">bun run dev</code>{" "}
                in <code className="text-neutral-500 font-mono">packages/studio</code>.
              </p>
            </div>
          ) : (
            <p className="text-xs text-neutral-600">
              Waiting for preview server… run{" "}
              <code className="text-neutral-500 font-mono">npm run dev</code>
            </p>
          )}
        </div>
      ) : (
        <div className="w-4 h-4 rounded-full bg-studio-accent animate-pulse" />
      )}
    </div>
  );
}
