import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-12 px-8 font-mono text-[11px] tracking-mission uppercase border border-hud-cyan/40 text-hud-cyan hover:bg-hud-cyan/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-hud-cyan" />
      ) : (
        <>
          TRANSMIT
          <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
