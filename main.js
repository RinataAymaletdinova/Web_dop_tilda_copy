// Главный файл приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена');
    
    // Инициализация меню
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuBtn = document.querySelector('.header__menu-btn');
    const closeBtn = document.querySelector('.menu__close');
    const headerTitle = document.querySelector('.header__title');
    const headerButton = document.querySelector('.header__button');
    
    // Функция открытия меню
    function openMenu() {
        console.log('Открытие меню');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Функция закрытия меню
    function closeMenu() {
        console.log('Закрытие меню');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // События для меню
    if (menuBtn && closeBtn && menuOverlay) {
        menuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
        console.log('Слушатели меню добавлены');
    }
    
    // Обновление страницы при клике на заголовок
    if (headerTitle) {
        headerTitle.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.reload();
        });
    }
    
    // Кнопка "к проектам" в header
    if (headerButton) {
        headerButton.addEventListener('click', function() {
            console.log('Переход к проектам');
        });
    }

    // Кнопка "к проектам" в блоке quote
    const quoteButton = document.querySelector('.quote-button');
    if (quoteButton) {
        quoteButton.addEventListener('click', function() {
            console.log('Переход к проектам из цитаты');
        });
    }

    // Инициализация параллакса
    initAestheticsParallax();
    initPrinciplesParallax();
});

// Простой параллакс для блока с эстетикой
function initAestheticsParallax() {
    const section = document.querySelector('.aesthetics-section');
    const images = document.querySelector('.parallax-images');
    
    if (!section || !images) return;
    
    function updateParallax() {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Параллакс работает только когда блок виден
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Прогресс от 0 (блок появляется снизу) до 1 (блок уходит наверх)
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            // Максимальное смещение и скорость
            const maxMove = 200;
            const move = progress * maxMove * 1; // Медленный параллакс
            
            // Применяем смещение (вверх при скролле вниз)
            images.style.transform = `translateY(-${move}px)`;
            
        } else {
            // Сбрасываем когда блок не виден
            images.style.transform = 'translateY(0px)';
        }
    }
    
    // Слушаем скролл
    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    
    // Запускаем сразу
    updateParallax();
}

// Простой параллакс для блока с принципами
function initPrinciplesParallax() {
    const section = document.querySelector('.principles-section');
    const images = document.querySelector('.principles-images');
    const text = document.querySelector('.principles-main-text');
    const grid = document.querySelector('.principles-grid');
    
    if (!section) return;
    
    function updateParallax() {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Параллакс работает только когда блок виден
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Прогресс от 0 (блок появляется снизу) до 1 (блок уходит наверх)
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            // Максимальное смещение в пикселях
            const maxMove = 500;
            
            // Разная скорость движения
            const imagesMove = progress * maxMove * 1;  // Картинки - медленнее
            const textMove = progress * maxMove * 1.8;    // Текст - быстрее
            const gridMove = progress * maxMove * 1.8;    // Сетка - средняя
            
            // Применяем смещение (вверх при скролле вниз)
            if (images) images.style.transform = `translateY(-${imagesMove}px)`;
            if (text) text.style.transform = `translateY(-${textMove}px)`;
            if (grid) grid.style.transform = `translateY(-${gridMove}px)`;
            
        } else {
            // Сбрасываем когда блок не виден
            if (images) images.style.transform = 'translateY(0px)';
            if (text) text.style.transform = 'translateY(0px)';
            if (grid) grid.style.transform = 'translateY(0px)';
        }
    }
    
    // Слушаем скролл
    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    
    // Запускаем сразу
    updateParallax();
}

// Обработка видео
function initVideo() {
    const video = document.querySelector('.fullscreen-video');
    if (video) {
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }
}

// Обработчики для ссылок меню
function initMenuLinks() {
    const menuLinks = document.querySelectorAll('.menu__link');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Клик по ссылке меню:', this.textContent);
        });
    });
}

// Инициализация социальных ссылок
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social__link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Клик по социальной ссылке');
        });
    });
}

// Добавляем вызовы дополнительных функций
document.addEventListener('DOMContentLoaded', function() {
    initVideo();
    initMenuLinks();
    initSocialLinks();
});

// Ресайз обработчик
window.addEventListener('resize', function() {
    // При изменении размера окна переинициализируем параллакс
    setTimeout(() => {
        initAestheticsParallax();
        initPrinciplesParallax();
    }, 100);
});


// Кастомный курсор для блока "Создаем как искусство"
function initArtCursor() {
    const artSection = document.querySelector('.art-section');
    const artItems = document.querySelectorAll('.art-item');
    const artCursor = document.querySelector('.art-cursor');
    const cursorImage = document.querySelector('.cursor-image');
    
    if (!artSection || !artCursor || !cursorImage) return;
    
    let currentImage = '';
    
    // Движение курсора
    artSection.addEventListener('mousemove', function(e) {
        artCursor.style.left = e.clientX + 'px';
        artCursor.style.top = e.clientY + 'px';
    });
    
    // Наведение на элементы
    artItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const imageUrl = this.getAttribute('data-image');
            if (imageUrl && imageUrl !== currentImage) {
                cursorImage.src = imageUrl;
                currentImage = imageUrl;
                artCursor.classList.add('active');
            }
        });
        
        item.addEventListener('mouseleave', function() {
            artCursor.classList.remove('active');
        });
    });
    
    // Скрываем курсор при выходе из секции
    artSection.addEventListener('mouseleave', function() {
        artCursor.classList.remove('active');
    });
}

// Добавь вызов в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    initArtCursor();
    initBackToTop();
});

// Текст "наверх"
function initBackToTop() {
    const backToTopText = document.querySelector('.back-to-top-text');
    
    if (backToTopText) {
        backToTopText.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
