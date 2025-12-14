import React from 'react';
import { useScroll } from '../context/ScrollContext';
import { useNavigation } from '../hooks/useNavigation';
import LogoImage from '../assets/logo.svg';

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { activeSection, scrollToSection } = useScroll();
  const { handleNavigation } = useNavigation();

  const navItems = [
    { id: 'о-школе', label: 'О школе' },
    { id: 'каталог-курсов', label: 'Каталог курсов' },
    { id: 'преподаватели', label: 'Преподаватели' },
    { id: 'контакты', label: 'Контакты' }
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    scrollToSection('hero');
  };

  return (
    <header className="bg-[#A7BAFB] h-12 sm:h-16 lg:h-[91px] sticky top-0 z-50 w-full">
      <div className="container mx-auto px-3 sm:px-4 h-full flex items-center justify-between max-w-screen-2xl">
        
        {/* Логотип - кликабельный для возврата наверх */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-2 sm:gap-3 lg:gap-4 focus:outline-none active:opacity-80"
        >
          {LogoImage ? (
            <img 
              src={LogoImage} 
              alt="Логотип online.s" 
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16" 
              style={{ 
                imageRendering: 'crisp-edges',
              }}
            />
          ) : (
            <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16 bg-[#513AA5] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base lg:text-lg">OS</span>
            </div>
          )}
          <div className="text-[#513AA5] text-lg sm:text-xl lg:text-3xl 
                         [text-shadow:_0.5px_0.5px_0_#000,_-0.5px_-0.5px_0_#000,_0.5px_-0.5px_0_#000,_-0.5px_0.5px_0_#000] sm:[text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000]
                         font-['Bubbler_One'] whitespace-nowrap">
            online.s
          </div>
        </button>

        {/* Кнопка мобильного меню */}
        <button 
          className="lg:hidden text-[#513AA6] text-2xl p-1 sm:p-2 active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Навигация для десктопа */}
        <nav className="hidden lg:block">
          <ul className="flex gap-4 sm:gap-6 lg:gap-8 font-['Brygada_1918']">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={(e) => handleNavigation(e, item.id)}
                  className={`text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap transition-colors ${
                    activeSection === item.id 
                      ? 'text-[#3d2c7d] font-bold' 
                      : 'text-[#513AA6] hover:text-[#3d2c7d]'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="fixed lg:hidden top-12 sm:top-16 left-0 right-0 bg-[#A7BAFB] z-50 shadow-lg">
            <ul className="flex flex-col items-center gap-2 sm:gap-4 py-4 sm:py-6 font-['Brygada_1918']">
              {navItems.map((item) => (
                <li key={item.id} className="w-full text-center">
                  <button
                    onClick={(e) => {
                      handleNavigation(e, item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg sm:text-xl font-medium block py-2 sm:py-3 w-full transition-colors active:bg-[#9cb0f0] ${
                      activeSection === item.id 
                        ? 'text-[#3d2c7d] font-bold' 
                        : 'text-[#513AA6] hover:text-[#3d2c7d]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>         
  );
};

export default Headers;