import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllPosts } from '../lib/posts';
import type { Post } from '../lib/posts';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import useBlobity from 'blobity/lib/react/useBlobity';

const CATEGORIES = ['All', 'AI Automation', 'DevOps', 'AI and DevOps'] as const;
type Filter = typeof CATEGORIES[number];

const CATEGORY_COLOR: Record<string, string> = {
  'AI Automation': 'text-hud-cyan border-hud-cyan/40',
  'DevOps':        'text-hud-teal border-hud-teal/40',
  'AI and DevOps': 'text-hud-blue border-hud-blue/40',
};

function stardate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const colorClass = CATEGORY_COLOR[post.category] ?? 'text-hud-cyan border-hud-cyan/40';
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <Link
        to={`/log/${post.slug}`}
        className="group flex flex-col h-full bg-space-900 border border-space-700 hover:border-hud-cyan/35 transition-colors duration-300 p-6"
        data-blobity-magnetic="false"
      >
        {/* Category + date */}
        <div className="flex items-center justify-between mb-4">
          <span className={`font-mono text-[9px] tracking-mission uppercase border px-2 py-0.5 ${colorClass}`}>
            {post.category}
          </span>
          <span className="font-mono text-ship-faint text-[9px]">
            STARDATE {stardate(post.date)}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-xl uppercase tracking-wider text-ship-text mb-3 group-hover:text-hud-cyan transition-colors duration-200 leading-tight">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-ship-muted text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map(tag => (
            <span key={tag} className="font-mono text-[9px] tracking-hud uppercase px-2 py-0.5 bg-space-800 text-ship-faint border border-space-700">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <span className="font-mono text-[10px] tracking-mission uppercase text-hud-cyan/50 group-hover:text-hud-cyan transition-colors">
          READ ENTRY →
        </span>
      </Link>
    </motion.article>
  );
}

export default function MissionLog() {
  useBlobity({
    color: '#fff',
    dotColor: '#555',
    dotSize: 10,
    zIndex: 5000000,
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 3,
    licenseKey: 'opensource',
    magnetic: true,
    font: 'Montserrat',
    invert: true,
    mode: 'bouncy',
    radius: 18,
    focusableElements:
      '[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
    fontSize: 16,
    size: 36,
    kineticMorphing: true,
    fontColor: '#00000080',
  });

  const [filter, setFilter] = React.useState<Filter>('All');
  const allPosts = getAllPosts();
  const filtered = filter === 'All' ? allPosts : allPosts.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeIn' }}
      className="min-h-screen bg-space-950"
    >
      <Navbar />

      <main className="pt-24 pb-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-hud-cyan text-[10px] tracking-mission uppercase mb-4"
            >
              ◆ MISSION LOG — OPEN ACCESS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="font-display text-[clamp(3.5rem,10vw,8rem)] uppercase tracking-wider text-ship-text leading-none"
            >
              Mission
              <br />
              Log
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-mono text-ship-muted text-sm mt-5 tracking-hud max-w-xl"
            >
              Field notes from the engineering deck — AI automation, DevOps,
              and the systems I'm building. DevOps entries follow a weekly
              Captain's Log format.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="h-px bg-gradient-to-r from-hud-cyan/50 to-transparent mt-8"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-[10px] tracking-hud uppercase px-4 py-2 border transition-colors ${
                  filter === cat
                    ? 'border-hud-cyan text-hud-cyan bg-hud-cyan/10'
                    : 'border-space-700 text-ship-muted hover:border-hud-cyan/40 hover:text-ship-text'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          {filtered.length === 0 ? (
            <p className="font-mono text-ship-faint text-sm tracking-hud uppercase">
              NO ENTRIES FOUND — CLASSIFICATION: {filter}
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
