/**
 * @copyright GDAsh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import {useRef, useEffect} from "react";
import PropTypes from "prop-types";

const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';  // Corrected offsetLeft
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(() => {
      initActiveBox();
      window.addEventListener('resize', initActiveBox);

      return () => {
        window.removeEventListener('resize', initActiveBox);  // Clean up on unmount
      };
    }, []);

    const activeCurrentLink = (event) => {
      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;

      activeBox.current.style.top = event.target.offsetTop + 'px';
      activeBox.current.style.left = event.target.offsetLeft + 'px';  // Corrected offsetLeft
      activeBox.current.style.width = event.target.offsetWidth + 'px';
      activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#contact',
          className: 'nav-link md:hidden'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {
            navItems.map(({label, link, className, ref}, key)=>( 
                <a
                href={link}
                key={key}
                ref={ref}
                className={className}
                onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))
        }
    <div 
    className="active-box"
    ref={activeBox}
    ></div>
   </nav>
  )
}

Navbar.propTypes = {   // Corrected propTypes case
  navOpen: PropTypes.bool.isRequired
}

export default Navbar;
