// Модуль для работы с header
export class Header {
    constructor() {
        this.initLogo();
        this.initButton();
    }

    initLogo() {
        const logo = document.querySelector('.header__logo');
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.reload();
            });
        }
    }

    initButton() {
        const button = document.querySelector('.header__button');
        if (button) {
            button.addEventListener('click', () => {
                // Логика для перехода к проектам
                console.log('Переход к проектам');
                // Здесь будет добавлена навигация к проектам
            });
        }
    }
}