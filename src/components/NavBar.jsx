import { useEffect, useState } from 'react';

import '../NavBar.css'; // Nous allons ajouter des styles pour la transition
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine, faBook, faBug, faCode, faComment, faCopyright, faPager, faUsers } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [helpMenuOpen, setHelpMenuOpen] = useState(false);

    const toggleHelpMenu = () => {
        setHelpMenuOpen(!helpMenuOpen);
    };

    // Fonction pour fermer le menu d'aide lorsqu'on clique en dehors
    const closeHelpMenu = (event) => {
        if (helpMenuOpen && !event.target.closest('.navbar-help')) {
            setHelpMenuOpen(false);
        }
    };

    // Ajouter l'écouteur d'événement au montage et le supprimer au démontage
    useEffect(() => {
        document.addEventListener('click', closeHelpMenu);
        return () => {
            document.removeEventListener('click', closeHelpMenu);
        };
    }, [helpMenuOpen]);

    return (
        <nav className='flex items-center justify-between bg-blue-800 h-16 px-6 py-2'>
            <a href='/'>
                <div className='text-white text-xl font-bold'>
                    Emi <span className=' font-light max-md:hidden'>- articles les plus visités par pays</span>
                </div>
            </a>

            <div className='flex items-center justify-between'>
                <ul className='flex items-center justify-center gap-4 text-white'>
                    <li>
                        <a href='/page-views' className=' text-white underline'>
                            <span className='max-md:hidden'>Page views</span>
                            <span className='hidden max-md:block'>
                                <FontAwesomeIcon icon={faPager} style={{ color: '#ffffff' }} />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/top-africa' className=' text-white underline'>
                            <span className='max-md:hidden'>Top Africa</span>
                            <span className='hidden max-md:block'>
                                <FontAwesomeIcon icon={faArrowsUpToLine} style={{ color: '#ffffff' }} />
                            </span>
                        </a>
                    </li>
                </ul>
                <button onClick={toggleHelpMenu} className='help-icon'>
                    Aide ▼
                </button>
                {helpMenuOpen && (
                    <div className='help-menu'>
                        <a href='https://meta.wikimedia.org/wiki/Emi_Solution' className='footer-link' target='_blank'>
                            <FontAwesomeIcon icon={faBook} /> Documentation
                        </a>
                        <a href='https://github.com/kaliacad/mostvisitedarticle' className='footer-link' target='_blank'>
                            <FontAwesomeIcon icon={faCode} /> View source
                        </a>
                        <a href='https://github.com/kaliacad/mostvisitedarticle/issues' className='footer-link' target='_blank'>
                            <FontAwesomeIcon icon={faBug} /> Report an issue
                        </a>
                        <a
                            href='https://meta.wikimedia.org/w/index.php?title=Talk:Emi_Solution&action=edit&redlink=1'
                            className='footer-link'
                            target='_blank'
                        >
                            <FontAwesomeIcon icon={faComment} /> Feedback
                        </a>
                        <a href='https://github.com/kaliacad.org/' className='footer-link' target='_blank'>
                            <FontAwesomeIcon icon={faUsers} /> Developed by Kali Academy
                        </a>
                        <a href='https://kaliacademy.org/' className='footer-link' target='_blank'>
                            <FontAwesomeIcon icon={faCopyright} /> Kali Academy
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
