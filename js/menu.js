// Модуль для работы с меню
export class Menu {
    constructor() {
        this.menuOverlay = document.querySelector('.menu-overlay');
        this.menuBtn = document.querySelector('.header__menu-btn');
        this.closeBtn = document.querySelector('.menu__close');
        
        this.init();
    }

    init() {
        if (this.menuBtn && this.closeBtn && this.menuOverlay) {
            this.menuBtn.addEventListener('click', () => this.openMenu());
            this.closeBtn.addEventListener('click', () => this.closeMenu());
            this.menuOverlay.addEventListener('click', (e) => {
                if (e.target === this.menuOverlay) {
                    this.closeMenu();
                }
            });
        } else {
            console.error('Элементы меню не найдены');
        }
    }

    openMenu() {
        this.menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}