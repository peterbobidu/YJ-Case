import { useEffect, useState } from "react";
import PortfolioClassic from "./PortfolioClassic";
import PortfolioEnhanced from "./PortfolioEnhanced";

type ViewMode = "enhanced" | "classic";

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("enhanced");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("view");
    if (mode === "classic" || mode === "enhanced") {
      setViewMode(mode);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("view", viewMode);
    window.history.replaceState({}, "", url);
  }, [viewMode]);

  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/88 p-2 shadow-[0_12px_40px_rgba(76,54,28,0.12)] backdrop-blur">
        <button
          type="button"
          onClick={() => setViewMode("enhanced")}
          className={`rounded-full px-4 py-2 text-sm transition ${
            viewMode === "enhanced"
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-muted)] hover:bg-[var(--color-paper)]"
          }`}
        >
          升级版
        </button>
        <button
          type="button"
          onClick={() => setViewMode("classic")}
          className={`rounded-full px-4 py-2 text-sm transition ${
            viewMode === "classic"
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-muted)] hover:bg-[var(--color-paper)]"
          }`}
        >
          保留版
        </button>
      </div>

      {viewMode === "enhanced" ? <PortfolioEnhanced /> : <PortfolioClassic />}
    </>
  );
}

export default App;
