import React from 'react';

const partnersRow1 = [
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
    { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59", color: "#FF7A59" },
    { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar/4285F4", color: "#4285F4" },
    { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4A00", color: "#FF4A00" },
    { name: "Word", icon: "https://cdn.simpleicons.org/microsoftword/2B579A", color: "#2B579A" },
    { name: "YouTube", icon: "https://cdn.simpleicons.org/youtube/FF0000", color: "#FF0000" },
    { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE", color: "#7B68EE" },
    { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853", color: "#34A853" },
];

const partnersRow2 = [
    { name: "Airtable", icon: "https://cdn.simpleicons.org/airtable/18BFFF", color: "#18BFFF" },
    { name: "Miro", icon: "https://cdn.simpleicons.org/miro/050038", color: "#050038" },
    { name: "Google Drive", icon: "https://cdn.simpleicons.org/googledrive/4285F4", color: "#4285F4" },
    { name: "PowerPoint", icon: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A", color: "#B7472A" },
    { name: "Calendly", icon: "https://cdn.simpleicons.org/calendly/006BFF", color: "#006BFF" },
    { name: "Adobe", icon: "https://cdn.simpleicons.org/adobe/FF0000", color: "#FF0000" },
    { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06B66", color: "#F06B66" },
    { name: "Invision", icon: "https://cdn.simpleicons.org/invision/FF3366", color: "#FF3366" },
];

const MarqueeRow = ({ data, reverse }) => {
    return (
        <div className="flex overflow-hidden">
            <div className={`flex gap-6 px-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
                {[...data, ...data].map((item, idx) => (
                    <div
                        key={idx}
                        className="logo-card flex items-center gap-4 bg-white/50 px-6 py-4 rounded-2xl border transition duration-300 min-w-[200px]"
                        style={{
                            borderColor: "#f1f5f9",
                        }}
                    >
                        <img src={item.icon} alt={item.name} className="w-7 h-7 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                        <span className="font-semibold text-slate-700 text-sm">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PartnerSection = () => {
    return (
        <section className="py-16 bg-[#f4f4f4] overflow-hidden">

            {/* Heading */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-16">
                <h2 className="text-3xl md:text-5xl text-slate-900 mb-6">
                    With just a few clicks, <span className="text-indigo-600 italic">iBraine</span> integrates with your systems.
                </h2>
            </div>

            {/* Marquee Rows */}
            <div className="flex flex-col gap-8">
                <MarqueeRow data={partnersRow1} />
                <MarqueeRow data={partnersRow2} reverse />
            </div>
        </section>
    );
};

export default PartnerSection;