import React from 'react';
import { ScrollProvider } from './context/ScrollContext';
import Headers from './components/Headers';
import Hero from './components/Hero';
import MissionSection from './components/MissionSection';
import PricingSection from './components/PricingSection';
import TeachersSection from './components/TeachersSection';
import Footer from './components/Footer';

function App() {
  return (
    <ScrollProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Headers />
        
        {/* Добавляем id для якорных ссылок */}
        <section id="hero">
          <Hero />
        </section>
        
        <section id="о-школе">
          <MissionSection />
        </section>
        
        <section id="каталог-курсов">
          <PricingSection />
        </section>
        
        <section id="преподаватели">
          <TeachersSection />
        </section>
        
        <section id="контакты">
          <Footer />
        </section>
      </div>
    </ScrollProvider>
  );
}

export default App;