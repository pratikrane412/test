import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const features = [
    { title: 'Dedicated Resource', desc: 'Experienced managers focused entirely on your brand', color: '#0072BC' },
    { title: 'Customized Design', desc: 'Unique visual storytelling tailored to your identity', color: '#F58220' },
    { title: 'Data-Driven Strategy', desc: 'ROI-focused campaigns backed by real analytics', color: '#0072BC' },
    { title: 'Platform Expertise', desc: 'Meta, LinkedIn, Instagram & X — mastered comprehensively', color: '#F58220' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const SMImportance = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section style={{
            padding: '100px 24px',
            background: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative blob */}
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 400, height: 400,
                background: 'rgba(245,130,32,0.05)',
                borderRadius: '50%', filter: 'blur(100px)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 80,
                    alignItems: 'center',
                }}>

                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        {/* Decorative pulse circle */}
                        <div style={{
                            position: 'absolute', top: -24, left: -24,
                            width: 128, height: 128,
                            background: 'rgba(0,114,188,0.1)',
                            borderRadius: '50%', filter: 'blur(24px)',
                            animation: 'blobPulse 3s ease-in-out infinite',
                        }} />

                        <div style={{
                            borderRadius: 40, overflow: 'hidden',
                            border: '6px solid #fff',
                            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                alt="Team collaboration"
                                style={{
                                    width: '100%', height: '100%', objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 2s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>

                        {/* Floating accent */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute', bottom: -24, right: -16,
                                background: '#fff', borderRadius: 20,
                                padding: '14px 18px',
                                boxShadow: '0 16px 40px -8px rgba(0,0,0,0.1)',
                                display: 'flex', alignItems: 'center', gap: 10,
                            }}
                        >
                            <div style={{
                                width: 32, height: 32, borderRadius: 10,
                                background: '#F58220',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <Sparkles size={16} color="#fff" />
                            </div>
                            <div style={{
                                fontSize: 13, fontWeight: 700, color: '#1e293b',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                Visual Excellence
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        <motion.div variants={itemVariants} style={{
                            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
                        }}>
                            <div style={{ width: 32, height: 1.5, background: '#F58220' }} />
                            <span style={{
                                fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                                textTransform: 'uppercase', color: '#F58220',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                Why It Matters
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            style={{
                                fontFamily: "'Lora', serif",
                                fontSize: 'clamp(32px, 4vw, 52px)',
                                lineHeight: 1.1, color: '#0f172a', marginBottom: 20,
                            }}
                        >
                            Why social media is{' '}
                            <span style={{ color: '#0072BC', fontStyle: 'italic' }}>important</span>{' '}
                            for your business?
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: 16, color: '#64748b', lineHeight: 1.7, marginBottom: 32,
                            }}
                        >
                            Social media presents a great opportunity for businesses to create brand awareness and plays a crucial role when customers make purchase decisions.
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(0,114,188,0.04)' }}
                                    style={{
                                        display: 'flex', alignItems: 'flex-start', gap: 14,
                                        padding: 16, borderRadius: 16, cursor: 'default',
                                        transition: 'background 0.2s',
                                    }}
                                >
                                    <div style={{
                                        width: 28, height: 28, borderRadius: '50%',
                                        background: item.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0, marginTop: 2,
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.8"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            fontWeight: 700, color: '#0f172a', fontSize: 16, marginBottom: 2,
                                        }}>
                                            {item.title}
                                        </h4>
                                        <p style={{
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            color: '#64748b', fontSize: 13,
                                        }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @keyframes blobPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
        </section>
    );
};

export default SMImportance;