import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'hero', name: 'Главная' },
    { id: 'о-школе', name: 'О школе' },
    { id: 'каталог-курсов', name: 'Каталог курсов' },
    { id: 'преподаватели', name: 'Преподаватели' },
    { id: 'контакты', name: 'Контакты' }
  ];

  // Функция для плавной прокрутки к секции
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // Отступ для хедера
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }

    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Отслеживание активной секции при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      let currentSection = 'hero';
      
      sections.forEach(section => {
        if (section.id !== 'hero') {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section.id;
            }
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <ScrollContext.Provider value={{ 
      activeSection, 
      scrollToSection,
      sections 
    }}>
      {children}
    </ScrollContext.Provider>
  );
};