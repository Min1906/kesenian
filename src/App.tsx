/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { InteractiveCharacters } from './components/InteractiveCharacters';
import { AudioExperience } from './components/AudioExperience';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { DirectoryAndMap } from './components/DirectoryAndMap';
import { FestivalCalendar } from './components/FestivalCalendar';
import { LegendModal } from './components/LegendModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isLegendOpen, setIsLegendOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#15100B] text-[#EFE4D2] flex flex-col font-garamond selection:bg-[#781B1B] selection:text-[#FDE6B4]">
      {/* Top Bar with 3-Zone Contract */}
      <TopBar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection
          onExploreClick={() => handleNavigate('karakter')}
          onOpenLegend={() => setIsLegendOpen(true)}
        />

        {/* Interactive Character Gallery & Mask Breakdown */}
        <InteractiveCharacters />

        {/* Interactive Audio Synthesizer & Soundboard */}
        <AudioExperience />

        {/* Master Craftsmanship & Woodcarving Studio */}
        <CraftsmanshipSection />

        {/* Directory & Interactive Territory Map */}
        <DirectoryAndMap />

        {/* Festival & Performance Calendar */}
        <FestivalCalendar />
      </main>

      {/* Epic Heroic Legend Modal */}
      <LegendModal isOpen={isLegendOpen} onClose={() => setIsLegendOpen(false)} />

      {/* Clean Cultural Footer */}
      <Footer onNavigate={handleNavigate} onOpenLegend={() => setIsLegendOpen(true)} />
    </div>
  );
}
