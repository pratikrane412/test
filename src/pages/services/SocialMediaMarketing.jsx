import React from 'react';
import { motion } from 'framer-motion';
import SMHero from '../../components/SocialMediaComponents/SMHero';
import SMBenefits from '../../components/SocialMediaComponents/SMBenefits';
import SMImportance from '../../components/SocialMediaComponents/SMImportance';
import SMSuccessStories from '../../components/SocialMediaComponents/SMSuccessStories';
import SMContactCTA from '../../components/SocialMediaComponents/SMContactCTA';

const SocialMediaMarketing = () => {
    return (
        <main className="w-full bg-white overflow-hidden relative">

            {/* ════ LIVELY BACKGROUND LAYERS ════ */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* 1. Moving Mesh Gradients */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#0072BC]/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F58220]/10 rounded-full blur-[120px]"
                />

                {/* 2. Professional Grain Texture */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* 3. The Reference Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:10%_100%]" />
            </div>

            {/* ════ CONTENT ════ */}
            <div className="relative z-10">
                <SMHero />
                <SMBenefits />
                <div className="h-24" /> {/* Spacer for air */}
                <SMImportance />
                <SMSuccessStories />
                <SMContactCTA />
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                .font-lora { font-family: 'Lora', serif; }
                .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
                .text-gradient-blue { background: linear-gradient(to right, #0072BC, #29ABE2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .bg-ibraine-orange { background-color: #F58220; }
                
                /* Custom Selection color for iBraine */
                ::selection { background: #F58220; color: white; }
            `}</style>
        </main>
    );
};

export default SocialMediaMarketing;