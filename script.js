'use strict'
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Menu Show - hidden
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
})


const styleSwitcher = document.getElementById('style-switcher')
const switcherToggle = document.getElementById('switcher-toggle')
const switcherClose = document.getElementById('switcher-close')

//  SWITCHER SHOW
switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.add('show-switcher');
});

//  SWITCHER HIDDEN
switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher');
});

//  THEME COLORS
const colors = document.querySelectorAll('.style-switcher-color');

colors.forEach((color) => {
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('active-color'));
        color.classList.add('active-color')

        document.documentElement.style.setProperty('--hue', activeColor)
    }
});

// LIGHT /DARK MODE
let currentTheme = 'dark';

document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        currentTheme = input.value;
        document.body.className = currentTheme;
    });
});

var ServicesSwiper = new Swiper('.services-swiper', {
    spaceBetween: 32,

    pagination: { el: '.services-swiper .swiper-pagination', clickable: true }
    ,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1208: {
            slidesPerView: 3,
        },
    },
});

var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a) =>
        a.classList.remove('active-work')
    )

    this.classList.add('active-work')
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

const accordionItems = document.querySelectorAll(".resume-item")

accordionItems.forEach((item) => {

    const header = item.querySelector('.resume-header'),
        content = item.querySelector('.resume-content'),
        icon = item.querySelector('.resume-icon i');

    header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('accordion-open');

        content.style.height = isOpen ? content.scrollHeight + 'px' : '0';
        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

        accordionItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains('accordion-open')) {
                otherItem.querySelector('.resume-content').style.height = '0';
                otherItem.querySelector('.resume-icon i').classList = 'ri-add-line'
                otherItem.classList.remove('accordion-open');
            }
        })
    });
})



var ServicesSwiper = new Swiper('.testimonials-swiper', {
    spaceBetween: 32,

    pagination: { el: '.testimonials-swiper .swiper-pagination', clickable: true },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1208: {
            slidesPerView: 3,
        },
    },
});


const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    contactSubject = document.getElementById('contact-subject'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        message.classList.add('color-red');
        message.textContent = 'Write all the input fields';


        setTimeout(() => {
            message.textContent = ' ';
        }, 3000);
    }
    else {
        emailjs.sendForm('AQAAM007', 'template_behd31c', '#contact-form', 'phP79S7o2zA5R0Is4')
            .then(() => {
                message.classList.remove('color-first');
                message.classList.add('color-first');
                message.textContent = 'Message sent ✔'

                setTimeout(() => {
                    message.textContent = ' ';
                }, 5000);
            })
            .catch(() => {
                alert('OOPs! SOMETHING WENT WRONG...')
            }
            )
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }

};

contactForm.addEventListener('submit', sendEmail);

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 20 ? header.classList.add('bg-header') : header.classList.remove(bg - header);
}

window.addEventListener('scroll', scrollHeader)

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navToggle.classList.remove('animate-toggle')
    navMenu.classList.remove('show-menu')
};

navLink.forEach((n) => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTOP = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav-menu a[href*="' + sectionId + '"]')

        if (scrollY > sectionTOP && scrollY <= sectionTOP + sectionHeight) {
            sectionsClass?.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
};

window.addEventListener('scroll', scrollActive)
