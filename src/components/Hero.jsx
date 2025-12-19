import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import HeroImage from '../assets/gh.svg';

const Hero = () => {
  const { handleButtonClick } = useNavigation();

  return (
    <section className="bg-[#EDEFF1] relative min-h-[80vh] sm:min-h-screen flex items-center overflow-x-hidden">
      
      {/* Основной контейнер */}
      <div className="w-full relative">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:justify-start gap-6 sm:gap-8 lg:gap-0 pt-12 sm:pt-16 lg:pt-0">
            
            {/* Текстовый блок */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[390px] sm:max-w-2xl lg:max-w-[700px] xl:max-w-[745px] z-10 lg:pr-8">
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-bold text-gray-900 font-['Brygada_1918'] leading-snug sm:leading-tight lg:leading-[1.1] mb-4 sm:mb-6">
                Стань востребованным специалистом
              </h1>
              
              <div className="mb-6 sm:mb-8 lg:mb-10 max-w-[340px] sm:max-w-[546px]">
                <p className="font-['Brygada_1918'] font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-black">
                  Освойте новую профессию или повысьте квалификацию с гарантией результата.
                  <br className="hidden sm:block" />
                  Платите только за знания, которые приносят доход.
                </p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 w-full max-w-[340px] sm:max-w-[435px]">
                <button 
                  onClick={handleButtonClick}
                  className="bg-[#513AA6] text-white font-semibold rounded-[12px] sm:rounded-[14px] font-['Brygada_1918'] hover:bg-[#3d2c7d] transition-all duration-300 shadow-lg hover:shadow-xl w-full py-3 sm:py-4 text-base sm:text-lg md:text-xl lg:text-2xl active:scale-[0.97] sm:active:scale-[0.98] min-h-[48px] sm:min-h-[56px]"
                >
                  Выбрать курс
                </button>
                
                <div className="w-full">
                  <span className="font-['Bubbler_One'] font-normal text-sm sm:text-base md:text-lg text-black text-center lg:text-left block">
                    Первый урок любого курса – бесплатно
                  </span>
                </div>
              </div>
              
            </div>
            
            {/* Картинка - скрыта на экранах до 390px */}
            <div className="hidden sm:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50vw] xl:w-[848px] justify-end items-center mt-4 sm:mt-8 lg:mt-0">
              <div className="relative w-full h-[180px] sm:h-[250px] md:h-[320px] lg:h-full">
                {HeroImage ? (
                  <img 
                    src={HeroImage} 
                    alt="Изображение специалиста" 
                    className="w-full h-full object-contain object-center lg:object-right"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#A7BAFB] to-[#513AA6] flex items-center justify-center">
                    <span className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-['Brygada_1918'] px-3 sm:px-4 text-center">
                      Изображение специалиста
                    </span>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero;