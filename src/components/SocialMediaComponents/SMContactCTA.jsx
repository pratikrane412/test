import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

const SMContactCTA = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section style={{ padding: '80px 24px 60px', background: '#fff' }} ref={ref}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        borderRadius: 48,
                        background: 'linear-gradient(135deg, #0072BC 0%, #29ABE2 100%)',
                        padding: '80px 60px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 40px 80px -20px rgba(0,114,188,0.35)',
                    }}
                >
                    {/* Orbs */}
                    <div style={{
                        position: 'absolute', top: '-20%', right: '-10%',
                        width: '40%', height: '80%',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '50%', filter: 'blur(40px)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-20%', left: '-10%',
                        width: '40%', height: '80%',
                        background: 'rgba(0,0,0,0.08)',
                        borderRadius: '50%', filter: 'blur(40px)',
                        pointerEvents: 'none',
                    }} />

                    <div style={{ position: 'relative', zIndex: 2 }}>
                        {/* Pill */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: 'rgba(255,255,255,0.2)',
                            padding: '6px 16px', borderRadius: 100,
                            fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
                            textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)',
                            marginBottom: 24,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            <MessageSquare size={12} />
                            Get in touch
                        </div>

                        {/* Heading */}
                        <h2 style={{
                            fontFamily: "'Lora', serif",
                            fontSize: 'clamp(32px, 4vw, 58px)',
                            color: '#fff', lineHeight: 1.1, marginBottom: 20,
                        }}>
                            Ready to dominate the<br />
                            <span style={{ fontStyle: 'italic' }}>social landscape?</span>
                        </h2>

                        {/* Desc */}
                        <p style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 17, color: 'rgba(255,255,255,0.8)',
                            maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7,
                        }}>
                            Partner with Mumbai's leading digital agency to transform your social presence into a high-performance sales engine.
                        </p>

                        {/* Buttons */}
                        <div style={{
                            display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
                        }}>
                            <motion.button
                                whileHover={{
                                    background: '#fff',
                                    color: '#0072BC',
                                    y: -2,
                                    boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                                }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 8,
                                    padding: '16px 32px', borderRadius: 16,
                                    background: '#F58220', color: '#fff',
                                    fontWeight: 700, fontSize: 15, border: 'none', cursor: 'pointer',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    transition: 'background 0.2s, color 0.2s',
                                }}
                            >
                                Start Your Growth Story
                                <motion.span
                                    whileHover={{ x: 4 }}
                                    style={{ display: 'inline-flex' }}
                                >
                                    <ArrowRight size={18} />
                                </motion.span>
                            </motion.button>

                            <motion.button
                                whileHover={{ background: 'rgba(255,255,255,0.15)' }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 8,
                                    padding: '16px 32px', borderRadius: 16,
                                    background: 'transparent', color: '#fff',
                                    fontWeight: 700, fontSize: 15,
                                    border: '1.5px solid rgba(255,255,255,0.35)',
                                    cursor: 'pointer',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                            >
                                View Our Services
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer note */}
                <div style={{
                    textAlign: 'center', marginTop: 56,
                    paddingTop: 40, borderTop: '0.5px solid #f1f5f9',
                }}>
                    <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 12, color: '#94a3b8',
                    }}>
                        © 2024 iBraine Digital Marketing. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SMContactCTA;