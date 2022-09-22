import React from 'react';
import Icon from '../../Atoms/Icon/Icon';

const Contact_Navbar = () => {
    return (
        <>
            <>
                <div className="contact-navbar">
                    <a href="#" className=''>
                        <Icon
                             className='fa-solid fa-mobile-screen'
                        />
                    </a>
                    <a href="#" className=''>
                        <Icon
                            className='fa-solid fa-envelope'
                        />
                    </a>
                    <a href="#" className=''>
                        <Icon
                            className='fa-solid fa-user'
                        />
                    </a>
                </div>
            </>
        </>
    );
}

export default Contact_Navbar;
