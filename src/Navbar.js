import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';

function Navbar() {

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button>
                    <img src='https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fhome.svg?v=1614382900187' alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button>
                    <img src='https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fexplore.svg?v=1614382900067' alt="Explore"/>
                </button>
            </div>
						...
        </nav>
    );
}

export default Navbar;