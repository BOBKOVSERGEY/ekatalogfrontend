// enable strict mode
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.classList.remove('preload');

    const elements = {
        navBar: document.querySelector('.header__navbar'),
        navBarMenu: document.querySelector('.header__nav'),
        navBarBurger: document.querySelector('.header__burger'),
        navBarChevron: document.querySelectorAll('.header__nav-dropdown-chevron'),
    };
    // mobile menu expand
    elements.navBarChevron.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("open");
        });
    });

    /**menu**/

    const showMenu = (burger, nav)=>{
        if(burger && nav){
            burger.addEventListener('click', (e)=>{
                nav.classList.toggle('show');
                burger.classList.toggle('active');
                e.stopPropagation();
            })
        }
    };
    showMenu(elements.navBarBurger,elements.navBarMenu);
    if (elements.navBarMenu) {
        body.addEventListener('click', function (e) {
            if (!e.target.closest('.header__nav')) {
                elements.navBarMenu.classList.remove('show')
                elements.navBarBurger.classList.remove('active')
            }
        })
    }
    /**end menu**/
});







