import React from 'react';

import AboutHero from '../../components/Aboutpage/AboutHero/AboutHero';
import FounderSection from "../../components/Aboutpage/FounderSection/FounderSection";
import ClientStats from "../../components/Aboutpage/ClientStats/ClientStats";
import AgencyCommitment from "../../components/Aboutpage/AgencyCommitment/AgencyCommitment";

import TeamSection from "../../components/Aboutpage/TeamSection/TeamSection";


const Aboutpage = () => {
    return (
        <main className="w-full">

            <AboutHero />
            <FounderSection />
            <ClientStats />
            <AgencyCommitment />
            
            <TeamSection />

        </main>
    );
};

export default Aboutpage;