import Link from 'next/link';
import Style from '../styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={Style.mainnav}>
            <div className={Style.container +' container'}>
                <div className={Style.logo}>logo</div>
                <ul>
                    <li><Link href='/'>home</Link></li>
                    <li><Link href='/about'>about</Link></li>
                    <li><Link href='/cart'>cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
