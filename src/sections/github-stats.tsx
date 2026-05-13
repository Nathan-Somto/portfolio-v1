import SectionHeading from '../components/section-heading';
import { motion } from 'framer-motion';

const GITHUB_USER = 'Nathan-Somto';
const SPOTIFY_UID = '31pzyvscnti5exli5qzvj4enanc4';

function TelemetryPanel({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
      className="hud-bracket relative bg-space-900 border border-space-700 hover:border-hud-cyan/30 transition-colors overflow-hidden"
    >
      {/* Scanline */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      {/* Panel label */}
      <div className="relative z-10 flex items-center gap-2 px-5 py-3 border-b border-space-700">
        <span className="w-1.5 h-1.5 rounded-full bg-hud-cyan animate-pulse-hud flex-shrink-0" />
        <span className="font-mono text-[10px] tracking-mission uppercase text-hud-cyan/70">
          {label}
        </span>
      </div>
      <div className="relative z-10 p-5">{children}</div>
    </motion.div>
  );
}

export default function Telemetry() {
  return (
    <section
      id="telemetry"
      className="relative mb-28 sm:mb-40 px-6 sm:px-12 scroll-mt-28"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hud-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading text="Telemetry" label="05 — LIVE READOUT" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub Stats */}
         {/*  <TelemetryPanel label="GITHUB — ACTIVITY MONITOR" delay={0}>
            <img
              className="w-full object-contain rounded-sm"
              alt="GitHub stats"
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&title_color=00e5ff&icon_color=00e5ff&text_color=7ba4c0&border_color=0f2035&bg_color=060d1a&hide_border=false`}
            />
          </TelemetryPanel> */}

          {/* GitHub Streak */}
          <TelemetryPanel label="GITHUB — COMMIT STREAK" delay={0.1}>
            <img
              className="w-full object-contain rounded-sm"
              alt="GitHub streak"
              src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=transparent&background=060d1a&border=0f2035&ring=00e5ff&fire=1de9b6&currStreakLabel=00e5ff&sideLabels=7ba4c0&dates=3d5f74&stroke=0f2035&hide_border=false`}
            />
          </TelemetryPanel>

          {/* Spotify Now Playing */}
          <TelemetryPanel label="SPOTIFY — NOW PLAYING" delay={0.2}>
            <img
              className="w-full max-w-xs mx-auto object-contain"
              alt="Spotify now playing"
              src={`https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${SPOTIFY_UID}&cover_image=true&theme=default&show_offline=false&background_color=060d1a&interchange=false&bar_color=00e5ff&bar_color_cover=false`}
            />
          </TelemetryPanel>

          {/* GitHub Top Langs */}
         {/*  <TelemetryPanel label="GITHUB — LANGUAGE MATRIX" delay={0.3}>
            <img
              className="w-full object-contain rounded-sm"
              alt="Top languages"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=transparent&title_color=00e5ff&text_color=7ba4c0&border_color=0f2035&bg_color=060d1a&hide_border=false&langs_count=8`}
            />
          </TelemetryPanel> */}
        </div>
      </div>
    </section>
  );
}

