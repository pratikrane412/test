import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SMHero from '../../components/SocialMediaComponents/SMHero';
import SMTicker from '../../components/SocialMediaComponents/SMTicker';
import SMBenefits from '../../components/SocialMediaComponents/SMBenefits';
import SMImportance from '../../components/SocialMediaComponents/SMImportance';
import SMSuccessStories from '../../components/SocialMediaComponents/SMSuccessStories';
// import SMContactCTA from '../../components/SocialMediaComponents/SMContactCTA';
import QuoteForm from '../../components/Common component/QuoteForm';

/* ─── Sticky Nav ──────────────────────────────────────────── */


/* ─── Page ────────────────────────────────────────────────── */
const SocialMediaMarketing = () => {
    return (
        <main style={{ width: '100%', background: '#fff', overflowX: 'hidden', position: 'relative' }}>

            {/* ── Ambient background layers (fixed, behind everything) ── */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
            }}>
                {/* Drifting mesh orb 1 */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute', top: '-10%', left: '-10%',
                        width: '60%', height: '60%',
                        background: 'rgba(0,114,188,0.06)',
                        borderRadius: '50%', filter: 'blur(120px)',
                    }}
                />
                {/* Drifting mesh orb 2 */}
                <motion.div
                    animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute', bottom: '-10%', right: '-10%',
                        width: '50%', height: '50%',
                        background: 'rgba(245,130,32,0.06)',
                        borderRadius: '50%', filter: 'blur(120px)',
                    }}
                />
                {/* Subtle grid lines */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px)',
                    backgroundSize: '10% 100%',
                }} />
            </div>

            {/* ── Content ─────────────────────────────────────────────── */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <SMHero />
                <SMTicker />
                <SMBenefits />
                <div style={{ height: 24 }} />
                <SMImportance />
                <SMSuccessStories />
                {/* <SMContactCTA /> */}
                <QuoteForm />
            </div>

            {/* ── Global font + utility styles ────────────────────────── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        /* Smooth scroll */
        html { scroll-behavior: smooth; }

        /* Text selection branding */
        ::selection { background: #F58220; color: #fff; }

        /* Scroll-reveal utility — attach .sm-reveal to any element */
        .sm-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .sm-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Story card hover cursor */
        .story-card-hover { cursor: pointer; }
        .story-card-hover:hover h3 { color: #0072BC; }
      `}</style>
        </main>
    );
};

export default SocialMediaMarketing;