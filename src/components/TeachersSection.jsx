import React from 'react';
import DenisImage from '../assets/denis.svg';
import MaxImage from '../assets/max.svg';
import KimiImage from '../assets/kimi.svg';
import RomaImage from '../assets/roma.svg';

const TeachersSection = () => {
  const teachers = [
    {
      name: 'Савченков Денис',
      position: 'Senior Product Designer в VK',
      experience: '7 лет опыта',
      image: DenisImage,
      color: 'bg-[#FFE5E5]',
      textColor: 'text-[#D14343]'
    },
    {
      name: 'Складнов Максим',
      position: 'Ex-Head of Marketing в Яндекс',
      experience: '8 лет опыта',
      image: MaxImage,
      color: 'bg-[#E5F4FF]',
      textColor: 'text-[#2E5AAC]'
    },
    {
      name: 'Бахирев Андрей',
      position: 'Lead Backend в Тinkoff',
      experience: '10 лет опыта',
      image: KimiImage,
      color: 'bg-[#F0FFE5]',
      textColor: 'text-[#4CAF50]'
    },
    {
      name: 'Крашениников Рома',
      position: 'Кандидат технических наук',
      experience: '52 года опыта',
      image: RomaImage,
      color: 'bg-[#F3E5FF]',
      textColor: 'text-[#7B1FA2]'
    }
  ];

  return (
    <section className="bg-[#EDEFF1] py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 max-w-screen-2xl">
        
        {/* Заголовок секции */}
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-['Brygada_1918'] mb-2 sm:mb-4">
            Преподаватели
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 font-['Brygada_1918']">
            Эксперты, которые делятся реальным опытом
          </p>
        </div>
        
        {/* Сетка преподавателей - более компактная на мобильных */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 lg:gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2.5 sm:p-4 lg:p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-md sm:hover:shadow-lg lg:hover:shadow-xl"
            >
              
              {/* Аватар - значительно меньше на мобильных */}
              <div className="mb-3 sm:mb-4 lg:mb-6 relative">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full ${teacher.color} flex items-center justify-center overflow-hidden`}>
                  {teacher.image ? (
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = `
                          <span class="${teacher.textColor} text-lg sm:text-xl lg:text-4xl font-bold">
                            ${teacher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        `;
                      }}
                    />
                  ) : (
                    <span className={`${teacher.textColor} text-lg sm:text-xl lg:text-4xl font-bold`}>
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Имя - меньший размер шрифта */}
              <h3 className="text-xs sm:text-sm lg:text-2xl font-bold text-gray-900 font-['Brygada_1918'] mb-1 sm:mb-2 line-clamp-2">
                {teacher.name}
              </h3>
              
              {/* Должность - очень компактно на мобильных */}
              <p className="text-gray-700 font-['Brygada_1918'] text-xs sm:text-sm lg:text-lg mb-2 sm:mb-3 lg:mb-4 line-clamp-2">
                {teacher.position}
              </p>
              
              {/* Бейдж опыта - компактный */}
              <div className="mt-auto pt-2 sm:pt-3 lg:pt-4">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-white rounded-full shadow-sm border border-gray-200">
                  <span className={`text-xs lg:text-sm font-bold ${teacher.textColor}`}>
                    {teacher.experience}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TeachersSection;