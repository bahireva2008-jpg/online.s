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
      name: 'Крашеников Рома',
      position: 'Кандидат технических наук',
      experience: '52 года опыта',
      image: RomaImage,
      color: 'bg-[#F3E5FF]',
      textColor: 'text-[#7B1FA2]'
    }
  ];

  return (
    <section className="bg-[#EDEFF1] py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        
        {/* Заголовок секции */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-['Brygada_1918'] mb-4">
            Преподаватели
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-['Brygada_1918']">
            Эксперты, которые делятся реальным опытом
          </p>
        </div>
        
        {/* Сетка преподавателей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              
              {/* Аватар */}
              <div className="mb-6 relative">
                <div className={`w-32 h-32 rounded-full ${teacher.color} flex items-center justify-center overflow-hidden`}>
                  {teacher.image ? (
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = `
                          <span class="${teacher.textColor} text-4xl font-bold">
                            ${teacher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        `;
                      }}
                    />
                  ) : (
                    <span className={`${teacher.textColor} text-4xl font-bold`}>
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Имя */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-['Brygada_1918'] mb-2">
                {teacher.name}
              </h3>
              
              {/* Должность */}
              <p className="text-gray-700 font-['Brygada_1918'] text-base lg:text-lg mb-4">
                {teacher.position}
              </p>
              
              {/* Бейдж курса (если преподает курс) */}
              <div className="mt-auto pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                  <span className={`text-sm font-bold ${teacher.textColor}`}>
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