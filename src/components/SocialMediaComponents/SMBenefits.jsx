import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Zap, Clock, ArrowRight } from 'lucide-react';

const features = [
    { icon: <Users size={16} color="#0072BC" />, bg: 'rgba(0,114,188,0.1)', label: 'Targeted Reach' },
    { icon: <TrendingUp size={16} color="#F58220" />, bg: 'rgba(245,130,32,0.1)', label: 'Data-Driven ROI' },
    { icon: <Clock size={16} color="#0072BC" />, bg: 'rgba(0,114,188,0.1)', label: 'Real-Time Insights' },
    { icon: <ArrowRight size={16} color="#F58220" />, bg: 'rgba(245,130,32,0.1)', label: 'Cross-Platform' },
];

const SMBenefits = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section style={{
            padding: '100px 24px',
            background: '#f8fafc',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative blob */}
            <div style={{
                position: 'absolute', top: '50%', left: 0,
                transform: 'translateY(-50%)',
                width: 320, height: 320,
                background: 'rgba(0,114,188,0.05)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto' }} ref={ref}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 80,
                    alignItems: 'center',
                }}>

                    {/* VISUAL SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            borderRadius: 40, overflow: 'hidden',
                            border: '4px solid #fff',
                            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
                            aspectRatio: '4/5',
                            maxWidth: 380,
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                                alt="Marketing Results"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(0,114,188,0.2), transparent)',
                            }} />
                        </div>

                        {/* Growth Metric Card */}
                        <motion.div
                            animate={{ y: [0, -14, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute', bottom: -20, right: -20,
                                background: '#fff', borderRadius: 24, padding: 20,
                                boxShadow: '0 24px 48px -12px rgba(0,0,0,0.12)',
                                border: '0.5px solid #f1f5f9', minWidth: 200,
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <div style={{
                                    width: 28, height: 28, borderRadius: 8,
                                    background: 'rgba(0,114,188,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <TrendingUp size={14} color="#0072BC" />
                                </div>
                                <span style={{
                                    fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
                                    textTransform: 'uppercase', color: '#64748b',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}>
                                    Growth Metric
                                </span>
                            </div>
                            <div style={{
                                fontFamily: "'Lora', serif", fontSize: 28,
                                fontWeight: 600, color: '#0f172a', marginBottom: 4,
                            }}>
                                11,756
                            </div>
                            <div style={{
                                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em',
                                textTransform: 'uppercase', color: '#0072BC', marginBottom: 10,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                +24% this month
                            </div>
                            <div style={{
                                height: 6, background: '#f1f5f9',
                                borderRadius: 100, overflow: 'hidden',
                            }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: '75%' } : {}}
                                    transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                                    style={{
                                        height: '100%', borderRadius: 100,
                                        background: 'linear-gradient(90deg, #0072BC, #29ABE2)',
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Mini floating live badge */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                            style={{
                                position: 'absolute', top: -12, left: -12,
                                background: '#fff', borderRadius: 16,
                                padding: '10px 14px',
                                boxShadow: '0 12px 24px -6px rgba(0,0,0,0.1)',
                                display: 'flex', alignItems: 'center', gap: 8,
                            }}
                        >
                            <div style={{
                                width: 8, height: 8, borderRadius: '50%',
                                background: '#22c55e',
                                animation: 'pulse 2s infinite',
                            }} />
                            <span style={{
                                fontSize: 11, fontWeight: 700, color: '#334155',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                Live Engagement
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* TEXT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                            <div style={{ width: 32, height: 1.5, background: '#F58220' }} />
                            <span style={{
                                fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                                textTransform: 'uppercase', color: '#F58220',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                Agency Impact
                            </span>
                        </div>

                        <h2 style={{
                            fontFamily: "'Lora', serif",
                            fontSize: 'clamp(32px, 4vw, 52px)',
                            lineHeight: 1.1, color: '#0f172a', marginBottom: 20,
                        }}>
                            Great brands are built through{' '}
                            <span style={{ color: '#0072BC', fontStyle: 'italic' }}>
                                social media mastery.
                            </span>
                        </h2>

                        <p style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 16, color: '#64748b', lineHeight: 1.7, marginBottom: 32,
                        }}>
                            Social Media Marketing is no longer an option — it's your digital storefront. We help brands discover their voice and project it to the right audience at the right moment.
                        </p>

                        <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr',
                            gap: 12, marginBottom: 36,
                        }}>
                            {features.map((f, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    padding: '14px 16px', background: '#fff',
                                    borderRadius: 14, border: '0.5px solid #f1f5f9',
                                }}>
                                    <div style={{
                                        width: 32, height: 32, borderRadius: 10,
                                        background: f.bg,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        {f.icon}
                                    </div>
                                    <span style={{
                                        fontSize: 13, fontWeight: 700, color: '#1e293b',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    }}>
                                        {f.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(245,130,32,0.35)' }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                padding: '14px 28px', borderRadius: 100,
                                background: '#0f172a', color: '#fff',
                                fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Learn Our Process <Zap size={16} fill="currentColor" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
        </section>
    );
};

export default SMBenefits;