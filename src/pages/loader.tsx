import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSoundContext } from "../context/sound";

const T = {
  starsIn: 0,
  gridIn: 400,
  ringPulse: 900,
  glitch1: 1300,
  nameReveal: 1600,
  tagline: 2200,
  clearance: 2700,
  enter: 3300,
  fadeOut: 3900,
  done: 4600,
};

export default function Intro() {
  const navigate = useNavigate();
  const onComplete = useCallback(() => {
    localStorage.setItem("seenIntro", "true");
    navigate("/home", { state: { fromIntro: true } });
  }, [navigate]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mountedRef = useRef(true);
  const {
    play: playSound,
    soundEnabled
  } = useSoundContext();
  //const [phase, setPhase]         = useState<string>("stars");
  const [nameChars, setNameChars] = useState<string[]>([]);
  const [showTag, setShowTag] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [gone, setGone] = useState(false);
  const glitchPlayCount = useRef(0);

  useEffect(() => {
    if (!soundEnabled) return;
    if (nameChars.length === 0) return;
    if (nameChars.join("") === "NATHAN SOMTO") return;
    if (glitchPlayCount.current >= 2) return;
    glitchPlayCount.current += 1;
    playSound("glitch-text");
  }, [nameChars, soundEnabled]);
  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width, H = canvas.height;
    const CX = W / 2, CY = H / 2;


    const STARS = Array.from({ length: 260 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random() * 0.7 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
    }));

    /* ring particles orbit CX,CY */
    const PARTICLES = Array.from({ length: 80 }, (_, i) => ({
      angle: (i / 80) * Math.PI * 2,
      radius: 140 + Math.random() * 60,
      speed: 0.002 + Math.random() * 0.003,
      size: Math.random() * 2 + 0.5,
      a: Math.random() * 0.8 + 0.2,
    }));

    const start = performance.now();

    const draw = (now: number) => {
      if (!mountedRef.current) return;
      const elapsed = now - start;
      const starAlpha = Math.min(1, elapsed / 600);
      const ringAlpha = elapsed > 900 ? Math.min(1, (elapsed - 900) / 500) : 0;
      const glowAlpha = elapsed > 1300 ? Math.min(1, (elapsed - 1300) / 400) : 0;

      ctx.clearRect(0, 0, W, H);

      /* deep space bg */
      const bg = ctx.createRadialGradient(CX, CY, 0, CX, CY, Math.max(W, H) * 0.75);
      bg.addColorStop(0, "#060d1a");
      bg.addColorStop(0.5, "#030810");
      bg.addColorStop(1, "#020409");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      /* grid */
      if (elapsed > 400) {
        const gA = Math.min(0.07, ((elapsed - 400) / 600) * 0.07);
        ctx.strokeStyle = `rgba(0,229,255,${gA})`;
        ctx.lineWidth = 0.5;
        const gs = 48;
        for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      }

      /* stars */
      STARS.forEach(s => {
        const tw = 0.85 + Math.sin(now * 0.001 + s.twinkle) * 0.15;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,229,244,${s.a * starAlpha * tw})`; ctx.fill();
      });

      /* ring glow */
      if (glowAlpha > 0) {
        const rg = ctx.createRadialGradient(CX, CY, 90, CX, CY, 260);
        rg.addColorStop(0, `rgba(0,229,255,${glowAlpha * 0.06})`);
        rg.addColorStop(0.5, `rgba(13,127,255,${glowAlpha * 0.04})`);
        rg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
      }

      /* orbital particles */
      if (ringAlpha > 0) {
        PARTICLES.forEach(p => {
          p.angle += p.speed;
          const px = CX + Math.cos(p.angle) * p.radius;
          const py = CY + Math.sin(p.angle) * p.radius * 0.35;
          ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,229,255,${p.a * ringAlpha * 0.7})`; ctx.fill();
        });

        /* ring arcs */
        ctx.save();
        ctx.translate(CX, CY);
        ctx.scale(1, 0.35);
        [[150, 0.5, "#00e5ff"], [170, 0.3, "#0d7fff"], [195, 0.15, "#1de9b6"]].forEach(([r, a, c]) => {
          ctx.beginPath();
          ctx.arc(0, 0, r as number, -Math.PI * 0.7, Math.PI * 0.7);
          ctx.strokeStyle = `rgba(${hexToRgb(c as string)},${(a as number) * ringAlpha})`;
          ctx.lineWidth = 1 / 0.35;
          ctx.stroke();
        });
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); mountedRef.current = false; };
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const q = (fn: () => void, t: number) => timers.push(setTimeout(fn, t));

    const NAME = "NATHAN SOMTO";
    const CHARS = "▓▒░█▄▀■□◈◉⬡⬢#@$%&";
    let resolved = 0;
    let glitchInterval: ReturnType<typeof setInterval>;

    q(() => {
      setNameChars(NAME.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]));
      glitchInterval = setInterval(() => {
        setNameChars(prev =>
          prev.map((c, i) =>
            i < resolved ? NAME[i] : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
        );
      }, 60);
    }, T.glitch1);

    q(() => {
      /* resolve one char every 80ms */
      const resolveInterval = setInterval(() => {
        resolved++;
        if (resolved >= NAME.length) clearInterval(resolveInterval);
        if (glitchInterval) clearInterval(glitchInterval);
        setNameChars(NAME.split("").map((c, i) => (i < resolved ? c : CHARS[Math.floor(Math.random() * CHARS.length)])));
      }, 80);
      timers.push(resolveInterval as unknown as ReturnType<typeof setTimeout>);
    }, T.nameReveal);

    q(() => setShowTag(true), T.tagline);
    q(() => setShowClear(true), T.clearance);
    q(() => setShowEnter(true), T.enter);
    q(() => setFadeOut(true), T.fadeOut);
    q(() => { setGone(true); onComplete(); }, T.done);

    return () => timers.forEach(t => typeof t === "number" ? clearTimeout(t) : clearInterval(t as unknown as ReturnType<typeof setInterval>));
  }, [onComplete]);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* canvas starfield */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

      {/* HUD corners */}
      {[
        { top: 24, left: 24, borderTop: "1px solid #00e5ff", borderLeft: "1px solid #00e5ff" },
        { top: 24, right: 24, borderTop: "1px solid #00e5ff", borderRight: "1px solid #00e5ff" },
        { bottom: 24, left: 24, borderBottom: "1px solid #00e5ff", borderLeft: "1px solid #00e5ff" },
        { bottom: 24, right: 24, borderBottom: "1px solid #00e5ff", borderRight: "1px solid #00e5ff" },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", width: 32, height: 32, opacity: 0.4, ...s }} />
      ))}

      {/* centre content */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 0,
      }}>
        {/* small label above */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(9px,1.1vw,11px)",
          letterSpacing: "0.45em",
          color: "#0d7fff",
          marginBottom: "20px",
          opacity: nameChars.length > 0 ? 1 : 0,
          transition: "opacity 0.4s",
        }}>
          CREW·IDENTIFICATION
        </div>

        {/* BIG glitch name */}
        <div style={{
          fontFamily: "'Courier New', 'Lucida Console', monospace",
          fontSize: "clamp(40px, 9vw, 112px)",
          fontWeight: 700,
          letterSpacing: "0.12em",
          lineHeight: 1,
          color: "#d4e5f4",
          textShadow: nameChars.length > 0 && nameChars.join("") !== "NATHAN SOMTO"
            ? `0 0 30px #00e5ff, 0 0 60px rgba(0,229,255,0.4), 2px 0 #ff6b35, -2px 0 #0d7fff`
            : `0 0 40px rgba(0,229,255,0.3), 0 0 80px rgba(0,229,255,0.12)`,
          transition: "text-shadow 0.4s",
          minHeight: "1.1em",
          whiteSpace: "nowrap",
        }}>
          {nameChars.length > 0 ? nameChars.join("") : ""}
        </div>

        {/* divider line */}
        <div style={{
          width: nameChars.join("") === "NATHAN SOMTO" ? "min(480px,80vw)" : "0px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00e5ff, #1de9b6, transparent)",
          margin: "18px 0",
          transition: "width 0.6s ease",
          boxShadow: "0 0 8px rgba(0,229,255,0.5)",
        }} />

        {/* tagline */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(11px, 1.6vw, 16px)",
          letterSpacing: "0.3em",
          color: "#1de9b6",
          opacity: showTag ? 1 : 0,
          transform: showTag ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          textAlign: "center",
        }}>
          DEVELOPER · FILM THEORIST · FOOTBALL AFICIONADO
        </div>

        {/* clearance */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(9px, 1vw, 11px)",
          letterSpacing: "0.35em",
          color: "#7ba4c0",
          marginTop: "12px",
          opacity: showClear ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}>
          CLEARANCE·GRANTED ··· ACCESS·LEVEL·ALPHA
        </div>

        {/* ENTER prompt */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(9px, 1vw, 10px)",
          letterSpacing: "0.5em",
          color: "#00e5ff",
          marginTop: "44px",
          opacity: showEnter ? 1 : 0,
          transition: "opacity 0.4s ease",
          animation: showEnter ? "pulse 1s ease-in-out infinite" : "none",
        }}>
          ◈ &nbsp; ENTERING MISSION DOSSIER
        </div>
      </div>

      {/* bottom coordinates */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Courier New', monospace",
        fontSize: "9px", letterSpacing: "0.3em",
        color: "#3d5f74",
        opacity: showClear ? 0.7 : 0,
        transition: "opacity 0.6s",
      }}>
        SYS·v3 ·· LAT 6.5244°N ·· LNG 3.3792°E ·· SECTOR·ALPHA
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; }
          50%      { opacity:0.3; }
        }
      `}</style>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}