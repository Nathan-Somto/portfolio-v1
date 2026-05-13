import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug, getAllPosts } from '../lib/posts';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import useBlobity from 'blobity/lib/react/useBlobity';

const CATEGORY_COLOR: Record<string, string> = {
  'AI Automation': 'text-hud-cyan border-hud-cyan/40',
  'DevOps':        'text-hud-teal border-hud-teal/40',
  'AI and DevOps': 'text-hud-blue border-hud-blue/40',
};

function stardate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default function MissionLogPost() {
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

  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? '');

  if (!post) return <Navigate to="/log" replace />;

  const allPosts = getAllPosts();
  const currentIdx = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;

  const colorClass = CATEGORY_COLOR[post.category] ?? 'text-hud-cyan border-hud-cyan/40';
  const { Component } = post;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeIn' }}
      className="min-h-screen bg-space-950"
    >
      <Navbar />

      <main className="pt-24 pb-24 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/log"
            className="font-mono text-[10px] tracking-mission uppercase text-ship-faint hover:text-hud-cyan transition-colors mb-10 inline-flex items-center gap-2"
            data-no-blobity
          >
            ← MISSION LOG
          </Link>

          {/* Post header */}
          <header className="mt-8 mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className={`font-mono text-[9px] tracking-mission uppercase border px-2 py-0.5 ${colorClass}`}>
                {post.category}
              </span>
              <span className="font-mono text-ship-faint text-[9px]">
                STARDATE {stardate(post.date)}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2rem,6vw,4rem)] uppercase tracking-wider text-ship-text leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-ship-muted text-base leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="font-mono text-[9px] tracking-hud uppercase px-2 py-1 bg-space-800 text-ship-faint border border-space-700">
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-hud-cyan/40 to-transparent" />
          </header>

          {/* MDX Content */}
          <div className="mdx-content">
            <Component />
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-space-700 grid grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                to={`/log/${prevPost.slug}`}
                className="group flex flex-col gap-1 bg-space-900 border border-space-700 hover:border-hud-cyan/30 p-4 transition-colors"
                data-no-blobity
              >
                <span className="font-mono text-[9px] tracking-mission uppercase text-ship-faint">← PREV ENTRY</span>
                <span className="font-display text-sm uppercase tracking-wider text-ship-text group-hover:text-hud-cyan transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link
                to={`/log/${nextPost.slug}`}
                className="group flex flex-col gap-1 text-right bg-space-900 border border-space-700 hover:border-hud-cyan/30 p-4 transition-colors"
                data-no-blobity
              >
                <span className="font-mono text-[9px] tracking-mission uppercase text-ship-faint">NEXT ENTRY →</span>
                <span className="font-display text-sm uppercase tracking-wider text-ship-text group-hover:text-hud-cyan transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
