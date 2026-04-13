import React from 'react';

const items = [
    'Meta Advertising', 'Instagram Growth', 'LinkedIn Strategy',
    'Content Creation', 'Brand Identity', 'Data Analytics',
    'Performance Ads', 'Community Management',
];

const SMTicker = () => {
    const doubled = [...items, ...items];

    return (
        <div style={{
            padding: '20px 0',
            background: '#0f172a',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10,
        }}>
            <div style={{
                display: 'flex',
                animation: 'ticker 22s linear infinite',
                whiteSpace: 'nowrap',
            }}>
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 12,
                            padding: '0 32px',
                            fontSize: 13, fontWeight: 700,
                            color: 'rgba(255,255,255,0.45)',
                            textTransform: 'uppercase', letterSpacing: '0.1em',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        {item}
                        <span style={{
                            width: 4, height: 4, borderRadius: '50%',
                            background: '#F58220', display: 'inline-block', flexShrink: 0,
                        }} />
                    </span>
                ))}
            </div>
            <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default SMTicker;