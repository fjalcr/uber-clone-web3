import React from 'react';
import Image from 'next/image';
import Avatar from '../temp/avatar.png';

const styles = {
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
    rightMenu: `flex gap-3 items-center`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`
}

const currentUser = `3x98298724972934792734927349723974293`;
//const currentUser = ``;

const Navbar = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.leftMenu}>
                <div className={styles.logo}>Uber</div>    
                <div className={styles.menuItem}>Rive</div>    
                <div className={styles.menuItem}>Drive</div>    
                <div className={styles.menuItem}>More</div>    
            </div>
            <div className={styles.rightMenu}>
                <div className={styles.menuItem}>Help</div>    
                <div className={styles.menuItem}>Javier</div>
                {
                    currentUser ? (
                        <>
                            <div className={styles.userImageContainer}>
                                <Image className={styles.userImage} src={Avatar} width={48} height={48} />
                            </div>
                            <div>{`${currentUser.slice(0,6)}...${currentUser.slice(-3)}`}</div>
                        </>
                    ):(
                        <div>Log in</div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;
