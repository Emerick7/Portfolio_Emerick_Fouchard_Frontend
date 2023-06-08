import frontendLogo from '../../src/assets/frontend-website-responsive.png';
import backendLogo from '../../src/assets/backend-website.png';

const ServicesArray = [
    {
        id: 1,
        title: "Applications Frontend",
        alt: 'frontend-developement-responsive-desktop-mobile-emerick-fouchard',
        src: frontendLogo,
        desc: "Création d'applications côté client avec des fonctionnalités modernes telles que SPA (Single Page Application) et maintient du style de codage sémantique parmi d'autres meilleures pratiques pour l'optimisation du référencement. Utilisation des technologies modernes telles que React, framer-motion et GSAP."
    },
    {
        id: 2,
        title: "Applications Backend",
        alt: 'backend-developement-coding-emerick-fouchard',
        src: backendLogo,
        desc: "Création d'applications serveur évolutives et maintenables à l'aide de technologies de pointe telles que Node.js, Express.js et MongoDB"
    }
]

export default ServicesArray;