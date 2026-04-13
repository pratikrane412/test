import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles, MoveRight } from 'lucide-react';

const stories = [
    {
        num: '01',
        title: 'TripXOXO: 300% Engagement Growth',
        desc: 'Transforming a travel brand into a social-first community through data-backed storytelling.',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600',
        tag: 'Travel & Tourism',
    },
    {
        num: '02',
        title: "India's Premier Luxury Fashion Hub",
        desc: 'Establishing a high-end digital identity for a luxury fashion house, driving 4x revenue.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
        tag: 'Elite E-commerce',
    },
    {
        num: '03',
        title: 'Scaling Modern SaaS Ecosystems',
        desc: 'Leveraging social channels to convert cold traffic into loyal, high-value brand advocates.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
        tag: 'Strategic Growth',
    },
];

const SMSuccessStories = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section style={{
            padding: '100px 24px',
            background: '#f8fafc',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Big watermark text */}
            <div style={{
                position: 'absolute', top: '8%', left: 0,
                fontSize: '14vw', fontWeight: 900,
                color: 'rgba(15,23,42,0.02)',
                fontFamily: "'Lora', serif",
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                pointerEvents: 'none',
                userSelect: 'none',
                lineHeight: 1,
            }}>
                Success
            </div>
            {/* Blue blob */}
            <div style={{
                position: 'absolute', top: '50%', right: 0,
                width: 380, height: 380,
                background: 'rgba(0,114,188,0.05)',
                borderRadius: '50%', filter: 'blur(100px)',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }} ref={ref}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'flex-end', marginBottom: 60,
                        flexWrap: 'wrap', gap: 24,
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <Sparkles size={18} color="#F58220" />
                            <span style={{
                                fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
                                textTransform: 'uppercase', color: '#64748b',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                Our Portfolio
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "'Lora', serif",
                            fontSize: 'clamp(40px, 5vw, 68px)',
                            lineHeight: 1.07, color: '#0f172a', margin: 0,
                        }}>
                            Inspiring{' '}
                            <span style={{ color: '#0072BC', fontStyle: 'italic' }}>Success</span>
                            <br />through social.
                        </h2>
                    </div>

                    <motion.button
                        whileHover={{ gap: 12, color: '#F58220', borderColor: '#F58220' }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            fontSize: 13, fontWeight: 700, color: '#0072BC',
                            background: 'none', border: 'none',
                            borderBottom: '1.5px solid #e2e8f0',
                            paddingBottom: 4, cursor: 'pointer',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            transition: 'all 0.2s',
                        }}
                    >
                        View All Stories <MoveRight size={18} />
                    </motion.button>
                </motion.div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 28,
                }}>
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                            style={{ position: 'relative', cursor: 'pointer' }}
                            className="story-card-hover"
                        >
                            {/* Italic number */}
                            <div style={{
                                position: 'absolute', top: -32, left: 0,
                                fontFamily: "'Lora', serif", fontSize: 44,
                                fontStyle: 'italic', fontWeight: 400,
                                color: 'rgba(0,114,188,0.08)',
                                transition: 'color 0.3s',
                                lineHeight: 1,
                            }}>
                                {story.num}
                            </div>

                            {/* Image */}
                            <div style={{
                                borderRadius: 32, overflow: 'hidden',
                                border: '3px solid #fff',
                                boxShadow: '0 20px 48px -12px rgba(0,0,0,0.1)',
                                aspectRatio: '4/5',
                                marginBottom: 24,
                                position: 'relative',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.querySelector('img').style.transform = 'scale(1.06)';
                                    e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)';
                                    e.currentTarget.querySelector('.overlay').style.opacity = '1';
                                    e.currentTarget.style.boxShadow = '0 32px 64px -16px rgba(0,0,0,0.18)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                                    e.currentTarget.querySelector('img').style.filter = 'grayscale(15%)';
                                    e.currentTarget.querySelector('.overlay').style.opacity = '0';
                                    e.currentTarget.style.boxShadow = '0 20px 48px -12px rgba(0,0,0,0.1)';
                                }}
                            >
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover',
                                        filter: 'grayscale(15%)',
                                        transition: 'transform 1s ease, filter 0.5s',
                                    }}
                                />
                                <div
                                    className="overlay"
                                    style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(to top, rgba(15,23,42,0.55), transparent)',
                                        opacity: 0, transition: 'opacity 0.4s',
                                    }}
                                />
                                <div style={{
                                    position: 'absolute', top: 16, left: 16,
                                    background: 'rgba(255,255,255,0.92)',
                                    backdropFilter: 'blur(8px)',
                                    padding: '6px 14px', borderRadius: 100,
                                    fontSize: 9, fontWeight: 700,
                                    textTransform: 'uppercase', letterSpacing: '0.15em',
                                    color: '#0072BC',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}>
                                    {story.tag}
                                </div>
                            </div>

                            {/* Text */}
                            <h3 style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 700, fontSize: 18,
                                color: '#0f172a', lineHeight: 1.3, marginBottom: 8,
                            }}>
                                {story.title}
                            </h3>
                            <p style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16,
                                display: '-webkit-box', WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical', overflow: 'hidden',
                            }}>
                                {story.desc}
                            </p>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                fontSize: 10, fontWeight: 800,
                                textTransform: 'uppercase', letterSpacing: '0.15em',
                                color: '#F58220',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                Explore Case
                                <div style={{
                                    width: 22, height: 22, borderRadius: '50%',
                                    background: 'rgba(245,130,32,0.12)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <ArrowUpRight size={12} color="#F58220" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}
                >
                    <div style={{
                        width: 48, height: 4,
                        background: '#e2e8f0', borderRadius: 100, overflow: 'hidden',
                    }}>
                        <motion.div
                            animate={{ x: ['-100%', '100%', '-100%'] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            style={{
                                width: '50%', height: '100%',
                                background: '#0072BC', borderRadius: 100,
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SMSuccessStories;