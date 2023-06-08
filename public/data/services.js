import frontendLogo from '../../src/assets/frontend-website-responsive.png';
import backendLogo from '../../src/assets/backend-website.png';
import wordpressLogo from '../../src/assets/website-wordpress-builder-theme.svg';
import seoLogo from '../../src/assets/seo.png';

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
    },
    {
        id: 3,
        title: "Sites WordPress",
        alt: 'wordpress-theme-builder-development-coding-emerick-fouchard',
        src: wordpressLogo,
        desc: "Création de sites web basés sur WordPress et développement de thèmes et plugins WordPress sur mesure en veillant à l'optimisation du référencement SEO. Maîtrise des outils tels que Divi et Elementor."
    },
    {
        id: 4,
        title: "Consultant SEO",
        alt: 'SEO-optimisation-emerick-fouchard',
        src: seoLogo,
        desc: "Analyse poussée de sites web et du marché visé pour optimiser le référencement de ceux-ci en fonction des besoins et du budget. Rédaction de rapports de référencement ainsi qu'une explication détaillée sur mesure des objectifs de référencement. Utilisation d'outils poussés pour l'analyse tels que Google Keyword Planner (Google Ads), Dareboost et Majestic."
    },
]

export default ServicesArray;