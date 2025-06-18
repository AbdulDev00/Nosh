import React from 'react';
import AboutHero from '../components/About-Hero';
import OurJourney from '../components/Journey';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import TeamSection from '../components/Team';
import MissionSection from '../components/Mission';



const About = () => {
  return (
    <div>
    <AboutHero />
    <OurJourney />
    <Timeline />
    <MissionSection />
    <TeamSection />
    <Footer />
    </div>
  );
};

export default About