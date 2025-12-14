import { useScroll } from '../context/ScrollContext';

export const useNavigation = () => {
  const { scrollToSection } = useScroll();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    // Для кнопки "Выбрать курс" в Hero - прокручиваем к каталогу курсов
    if (e.target.textContent.includes('Выбрать курс')) {
      const heroButton = e.target.closest('section#hero');
      if (heroButton) {
        scrollToSection('каталог-курсов');
      } else {
        // Для других кнопок "Выбрать курс" открываем модалку или выполняем другое действие
        console.log('Обработка выбора курса');
        // Здесь можно добавить логику для открытия модального окна или перехода на страницу курса
      }
    }
    
    // Для кнопки "..." (Показать еще)
    if (e.target.textContent === '...') {
      console.log('Загрузка дополнительных курсов');
      // Здесь можно добавить логику загрузки дополнительных курсов
    }
  };

  return {
    handleNavigation,
    handleButtonClick
  };
};