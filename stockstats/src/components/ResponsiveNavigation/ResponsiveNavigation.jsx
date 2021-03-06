import React, { useState } from 'react';
import { Link } from '@reach/router';

function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo}) {
    const[hoverIndex, setHoverIndex] = useState(-1)
    const [navopen, setNavOpen] = useState(false)

    return (
        <div>
        <nav
            className="responsive-toolbar"
            id={navopen ? 'active' : ''}
            style= {{background: background}}>
                <ul
                    style = {{background: background}}
                    className={navopen ? 'active' : ''}>

                    <figure onClick = {() => setNavOpen(!navopen)}>
                        <img src={logo} height="100px" width="100px" alt="logo nav toggler"/>
                    </figure>
                    {navLinks.map((link, index) =>
                        <li
                            key = {index}
                            onMouseEnter= { () => setHoverIndex(index)}
                            onMouseLeave= { () => setHoverIndex(-1)}
                            style = {{background: hoverIndex === index ? (hoverBackground || '#999'): ""}}

                        >
                            <Link
                                to={link.path}
                                style={{color: linkColor}}
                            >
                                {link.text}
                                <i className={link.icon} />
                            </Link>

                        </li>
                    )}
                </ul>

        </nav>
        </div>
    );
}

export default ResponsiveNavigation;