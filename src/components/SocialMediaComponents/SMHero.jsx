import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Share2, ArrowRight } from 'lucide-react';

const useCountUp = (ref, target, suffix, duration = 1800, delay = 0) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            let start = 0;
            const step = target / (duration / 16);
            const interval = setInterval(() => {
                start = Math.min(start + step, target);
                if (ref.current) ref.current.innerHTML = `${Math.round(start)}<span style="color:#F58220">${suffix}</span>`;
                if (start >= target) clearInterval(interval);
            }, 16);
        }, delay);
        return () => clearTimeout(timer);
    }, [target, suffix, duration, delay]);
};

const SMHero = () => {
    const statClients = useRef(null);
    const statROI = useRef(null);
    const statEngagement = useRef(null);

    useCountUp(statClients, 200, '+', 1800, 400);
    useCountUp(statROI, 4, 'x', 1200, 600);
    useCountUp(statEngagement, 300, '%', 1600, 800);

    return (
        <section style={{
            padding: '100px 20px 60px', // Reduced padding
            background: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Lively Background Orbs */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute', top: '-5%', left: '-5%',
                    width: '40%', height: '40%',
                    background: 'rgba(0,114,188,0.05)', borderRadius: '50%',
                    filter: 'blur(60px)', pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <div className="hero-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px', // Tighter gap
                    alignItems: 'center',
                }}>
                    {/* LEFT CONTENT — Smaller Text Scale */}
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                padding: '4px 12px', borderRadius: 100,
                                background: '#fff', border: '1px solid #f1f5f9',
                                fontSize: 9, fontWeight: 800, letterSpacing: '0.15em',
                                textTransform: 'uppercase', color: '#0072BC', marginBottom: 16,
                            }}>
                                <Sparkles size={10} color="#F58220" />
                                Social Media Experts
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontFamily: "'Lora', serif",
                                fontSize: 'clamp(32px, 4vw, 54px)', // Smaller H1
                                lineHeight: 1.1, color: '#0f172a',
                                margin: '0 0 16px', fontWeight: 600,
                            }}
                        >
                            Build a{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #0072BC, #29ABE2)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                fontStyle: 'italic',
                            }}>
                                Vibrant
                            </span>
                            <br />Brand Presence.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: 15, // Reduced font size
                                color: '#64748b', lineHeight: 1.6,
                                maxWidth: 420, marginBottom: 30,
                            }}
                        >
                            Stop scrolling, start engaging. We turn static profiles into <span style={{ color: '#0f172a', fontWeight: 600 }}>revenue-generating</span> communities through data-driven storytelling.
                        </motion.p>

                        {/* Buttons — Smaller Padding */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    padding: '12px 24px', borderRadius: 100,
                                    background: '#F58220', color: '#fff',
                                    fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    boxShadow: '0 10px 20px -5px rgba(245,130,32,0.3)',
                                }}
                            >
                                Get Started <ArrowRight size={14} />
                            </motion.button>
                            <button style={{
                                padding: '12px 24px', borderRadius: 100,
                                background: 'transparent', color: '#334155',
                                fontWeight: 700, fontSize: 13, border: '1px solid #e2e8f0',
                                cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                View Case Studies
                            </button>
                        </motion.div>

                        {/* Stats — Smaller scale */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ display: 'flex', gap: 30, marginTop: 40 }}
                        >
                            {[
                                { ref: statClients, label: 'Clients' },
                                { ref: statROI, label: 'Avg. ROI' },
                                { ref: statEngagement, label: 'Growth' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div ref={s.ref} style={{
                                        fontFamily: "'Lora', serif", fontSize: 24, fontWeight: 700,
                                        color: '#0f172a', lineHeight: 1,
                                    }}>0</div>
                                    <div style={{
                                        fontSize: 9, color: '#94a3b8', fontWeight: 800,
                                        textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    }}>
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — Smaller Image Layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1 1 350px', position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            width: '100%', maxWidth: 360, // Capped image size
                            borderRadius: 30, overflow: 'hidden',
                            border: '6px solid #fff',
                            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)',
                            aspectRatio: '4/5',
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800"
                                alt="SM Marketing"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Floating Items — Scaled Down */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            style={{
                                position: 'absolute', top: 20, left: 0,
                                background: '#fff', borderRadius: 15, padding: 12,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                            }}
                        >
                            <Camera size={18} color="#0072BC" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            style={{
                                position: 'absolute', bottom: 60, right: 0,
                                background: '#F58220', borderRadius: 15, padding: 12,
                                boxShadow: '0 10px 25px rgba(245,130,32,0.2)',
                            }}
                        >
                            <Share2 size={18} color="#fff" />
                        </motion.div>

                        <div style={{
                            position: 'absolute', bottom: -10, left: 20,
                            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)',
                            borderRadius: 12, padding: '8px 12px',
                            border: '1px solid #fff', display: 'flex', alignItems: 'center', gap: 8,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ display: 'flex', marginLeft: 4 }}>
                                {[11, 12].map((n, i) => (
                                    <img key={n} src={`https://i.pravatar.cc/100?img=${n}`} alt=""
                                        style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #fff', marginLeft: i === 0 ? 0 : -6 }} />
                                ))}
                            </div>
                            <span style={{ fontSize: 9, fontWeight: 800, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>LIVE ENGAGEMENT</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SMHero;