const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  WORKS: `${API_URL}/api/works`,
};

export const APP_PATHS = {
    HOME: '/',
    WORKS: '/portfolio',
    RESUME: '/resume',
    SERVICES: '/services',
    //WORK: '/works/:workId',
    ERROR_PAGE: '/error',
    SIGN_IN: '/connexion-secrète-pour-emerick-fouchard',
    ADD_WORK: '/page-secrète-d-ajout-de-projets',
    UPDATE_WORK: '/page-secrète-de-modification-de-projets',
    DASHBOARD: '/dashboard-secret-modification'
};

export const HOME_PATHS = {
    HOME: '/#home',
    ABOUT: '/#about',
    CONTACT: '/#contact'
};

export const CONTACT_PATHS = {
    MAIL: 'mailto:fouchardemerick@gmail.com',
    PHONE: 'tel:+33666483474',
    WHATSAPP: 'https://wa.me/33666483474'
};

export const SOCIAL_PATHS = {
    LINKEDIN: 'https://www.linkedin.com/in/emerick-f-58b080131/',
    GITHUB: 'https://github.com/Emerick7',
    TWITTER: 'https://twitter.com/FouchardEmerick',
    INSTAGRAM: 'https://www.instagram.com/kirem7/',
    TELEGRAM: ''
};

export const DOWNLOAD_PATHS = {
    RESUME_PDF: '',
};