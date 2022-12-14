import aboutBanner from '../assets/about-banner.jpg';
import aboutBannerDesktop from '../assets/about-banner-desktop.jpg';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';

function About() {
    const dropdowns = [
        {
            name: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            name: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            name: "Service",
            content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            name: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        }
    ];
    return (
        <>
            <Header />
            <section className='about-page'>
                <Banner class="mobile-banner" image={aboutBanner} alt="A propos de Kasa" />
                <Banner class="desktop-banner" image={aboutBannerDesktop} alt="A propos de Kasa" />
                <div className='dropdowns-wrapper'>
                    {dropdowns.map((dropdown, index) => <Dropdown key={`dropdown-${index}`} name={dropdown.name} content={dropdown.content} />)}
                </div>
            </section>
            <Footer />
        </>
    )
}
export default About;