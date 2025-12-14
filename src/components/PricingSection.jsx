import React from 'react';
import { useNavigation } from '../hooks/useNavigation';

const PricingSection = () => {
  const { handleButtonClick } = useNavigation();

  const courses = [
    {
      category: 'Дизайн',
      title: 'UX/UI-дизайнер с нуля до PRO',
      description: 'Создание интерфейсов, работа в Figma, 5 кейсов и портфолио.',
      format: 'С наставником',
      originalPrice: '76 471 ₽',
      discountedPrice: '65 000 ₽',
      discount: '-15%',
      categoryColor: 'bg-[#FFE5E5]',
      categoryTextColor: 'text-[#D14343]',
    },
    {
      category: 'IT и Программирование',
      title: 'Java-разработчик',
      description: 'Backend-разработка на одном из самых востребованных языков.',
      format: 'Интенсив с код-ревью',
      originalPrice: '102 353 ₽',
      discountedPrice: '87 000 ₽',
      discount: '-15%',
      categoryColor: 'bg-[#E5F4FF]',
      categoryTextColor: 'text-[#2E5AAC]',
    },
    {
      category: 'Маркетинг',
      title: 'SMM-стратег: от контента до аналитики',
      description: 'Упаковка бренда в соцсетях, вирусный контент.',
      format: 'Самостоятельный формат',
      originalPrice: '76 471 ₽',
      discountedPrice: '65 000 ₽',
      discount: '-15%',
      categoryColor: 'bg-[#F0FFE5]',
      categoryTextColor: 'text-[#4CAF50]',
    },
    {
      category: 'Аналитика',
      title: 'Data Analysis',
      description: 'Основы Python, визуализация данных в Tableau, разбор реального кейса.',
      format: 'Онлайн-интенсив',
      originalPrice: '58 824 ₽',
      discountedPrice: '50 000 ₽',
      discount: '-15%',
      categoryColor: 'bg-[#FFF4E5]',
      categoryTextColor: 'text-[#FF9800]',
    },
    {
      category: 'Управление',
      title: 'Tech Lead: руководство командой разработки',
      description: 'Soft skills, планирование и делегирование в IT проектах.',
      format: 'Для опытных разработчиков',
      originalPrice: '141 176 ₽',
      discountedPrice: '120 000 ₽',
      discount: '-15%',
      categoryColor: 'bg-[#F3E5FF]',
      categoryTextColor: 'text-[#7B1FA2]',
    },
    {
      category: 'Дизайн',
      title: 'Motion-дизайн в After Effects',
      description: 'Анимация интерфейсов, рекламных баннеров.',
      format: 'Портфолио из 8 работ',
      originalPrice: '98 824 ₽',
      discountedPrice: '84 000 ₽',
      discount: '-15%',
      categoryColor: 'bg-[#FFF0F5]',
      categoryTextColor: 'text-[#E91E63]',
    }
  ];

  return (
    <section className="bg-[#EDEFF1] py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        
        {/* Заголовок секции */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-['Brygada_1918'] mb-4">
            Стоимость обучения
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-['Brygada_1918']">
            Найдите программу под ваши цели
          </p>
        </div>
        
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-200"
            >
              
              {/* Категория */}
              <div className="mb-4">
                <span className={`inline-block px-4 py-1.5 rounded-full ${course.categoryTextColor} ${course.categoryColor} text-sm font-semibold font-['Brygada_1918']`}>
                  {course.category}
                </span>
              </div>
              
              {/* Заголовок курса */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-['Brygada_1918'] mb-3 lg:mb-4 leading-tight">
                {course.title}
              </h3>
              
              {/* Описание */}
              <p className="text-gray-700 font-['Brygada_1918'] text-base lg:text-lg mb-4 lg:mb-6 flex-grow">
                {course.description}
              </p>
              
              {/* Формат обучения */}
              <div className="mb-4">
                <span className="text-gray-800 font-medium font-['Brygada_1918']">
                  {course.format}
                </span>
              </div>
              
              {/* Цена и скидка */}
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl lg:text-3xl font-bold text-gray-900 font-['Brygada_1918']">
                      {course.discountedPrice}
                    </span>
                    <span className="text-lg lg:text-xl text-gray-500 line-through font-['Brygada_1918']">
                      {course.originalPrice}
                    </span>
                  </div>
                </div>
                
              </div>
              
              {/* Кнопка */}
              <button 
                onClick={handleButtonClick}
                className="w-full bg-[#513AA6] text-white font-semibold font-['Brygada_1918'] py-3 lg:py-4 rounded-lg text-lg lg:text-xl hover:bg-[#3d2c7d] transition-colors active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                Выбрать курс
              </button>
              
            </div>
          ))}
        </div>
        
        {/* Дополнительный текст или кнопка "Показать еще" */}
        <div className="text-center mt-12 lg:mt-16">
          <button 
            onClick={handleButtonClick}
            className="bg-transparent border-2 border-[#513AA6] text-[#513AA6] font-semibold font-['Brygada_1918'] px-8 py-3 rounded-lg text-lg hover:bg-[#513AA6] hover:text-white transition-all duration-300"
          >
            ...
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;