import React from 'react';
import { useNavigation } from '../hooks/useNavigation';

const Footer = () => {
  const { handleNavigation } = useNavigation();

  return (
    <footer className="bg-[#A7BAFB] text-gray-900 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-3 sm:px-4 max-w-screen-2xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Колонка 1: Навигация */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Brygada_1918'] mb-4 sm:mb-6">
              Онлайн-школа online.s
            </h3>
            <nav>
              <ul className="space-y-3 sm:space-y-4">
                {['О школе', 'Каталог курсов', 'Преподаватели'].map((item) => {
                  const itemId = item.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <li key={itemId}>
                      <button
                        onClick={(e) => handleNavigation(e, itemId)}
                        className="text-gray-900 hover:text-[#513AA6] font-['Brygada_1918'] text-base sm:text-lg lg:text-xl transition-colors text-left"
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          
          {/* Колонка 2: Контакты */}
          <div className="lg:col-span-3">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-['Brygada_1918'] mb-4 sm:mb-6">
              Контакты
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-['Brygada_1918'] mb-1">Телефон:</p>
                  <a 
                    href="tel:88005553535" 
                    className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl font-['Brygada_1918'] hover:text-[#513AA6] transition-colors"
                  >
                    8 (800) 555-35-35
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-['Brygada_1918'] mb-1">E-mail:</p>
                  <a 
                    href="mailto:support@online.s-academy.ru" 
                    className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl font-['Brygada_1918'] hover:text-[#513AA6] transition-colors"
                  >
                    support@online.s-academy.ru
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-['Brygada_1918'] mb-1">Телеграм-канал:</p>
                  <a 
                    href="https://t.me/online_s_support" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl font-['Brygada_1918'] hover:text-[#513AA6] transition-colors"
                  >
                    @online.s_support
                  </a>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-['Brygada_1918'] mb-1">Адрес офиса:</p>
                  <p className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl font-['Brygada_1918']">
                    Москва, ул. Образцова, 7<br />
                    <span className="text-gray-700 text-xs sm:text-base">(вход по пропускам)</span>
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-['Brygada_1918'] mb-1">
                    График работы поддержки:
                  </p>
                  <p className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl font-['Brygada_1918']">
                    Пн-Пт: 10:00–20:00<br />
                    Сб-Вс: 12:00–18:00 (МСК)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Разделительная линия */}
        <div className="border-t border-gray-900/20 my-6 sm:my-8 lg:my-12"></div>
        
        {/* Нижняя часть */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-800 font-['Brygada_1918'] text-sm sm:text-base lg:text-lg">
              © 2025 Онлайн-школа №1
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;