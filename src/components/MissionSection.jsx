import React from 'react';
import TablImage from '../assets/tabl.svg';

const MissionSection = () => {
  return (
    <section className="bg-[#EDEFF1] relative">
      {/* Основной блок */}
      <div className="relative mx-auto px-3 sm:px-4 pt-12 sm:pt-16 lg:pt-24 xl:pt-32">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20 max-w-full sm:max-w-[90%] lg:max-w-[1209px] mx-auto mb-12 sm:mb-16 lg:mb-24">
          {/* Заголовок */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-gray-900 font-['Brygada_1918'] leading-snug sm:leading-tight lg:leading-[1.1] text-center px-2 sm:px-0">
            Стань востребованным специалистом
          </h1>

          {/* Текст ниже */}
          <div className="font-['Brygada_1918'] font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed lg:leading-[42px] text-center text-black px-3 sm:px-4">
            <p>Мы соединяем лучших экспертов рынка с теми, кто хочет расти.</p>
            <p className="mt-2 sm:mt-3">Наша цель — ваш результат, а не просто диплом.</p>
          </div>
        </div>

        {/* Блок "В цифрах" */}
        <div className="max-w-full sm:max-w-[90%] lg:max-w-[1209px] mx-auto mb-12 sm:mb-16 lg:mb-24 px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
            В цифрах:
          </h2>
          
          {/* Изображение-таблица */}
          <div className="overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg">
            <img 
              src={TablImage} 
              alt="Образовательная платформа" 
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/1200x400/e5e7eb/6b7280?text=Educational+Stats";
              }}
            />
          </div>
        </div>

        {/* Frame 15 - Пункты наших принципов */}
        <div className="max-w-full sm:max-w-[90%] lg:max-w-[1209px] mx-auto lg:ml-[calc((100%-1209px)/2)] px-3 sm:px-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
              Наши принципы:
            </h3>
            
            <ul className="space-y-6 sm:space-y-8 lg:space-y-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl list-none pl-0 ml-0">
              <li className="pl-0 ml-0">
                <div className="lg:ml-6 xl:ml-12 pl-0">
                  <span className="font-bold text-black block mb-1 sm:mb-2 lg:mb-4">1. Актуальность</span>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-1 sm:mt-2 lg:mt-4 ml-0 lg:ml-4 pl-0">
                    Программы обновляются каждые 3 месяца.
                  </p>
                </div>
              </li>
              
              <li className="pl-0 ml-0">
                <div className="lg:ml-6 xl:ml-12 pl-0">
                  <span className="font-bold text-black block mb-1 sm:mb-2 lg:mb-4">2. Практика</span>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-1 sm:mt-2 lg:mt-4 ml-0 lg:ml-4 pl-0">
                    80% времени — на реальные задачи.
                  </p>
                </div>
              </li>
              
              <li className="pl-0 ml-0">
                <div className="lg:ml-6 xl:ml-12 pl-0">
                  <span className="font-bold text-black block mb-1 sm:mb-2 lg:mb-4">3. Сообщество</span>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-1 sm:mt-2 lg:mt-4 ml-0 lg:ml-4 pl-0">
                    Нетворкинг и поддержка сокурсников.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;