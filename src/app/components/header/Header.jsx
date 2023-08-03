import Image from 'next/image';
import { useId } from 'react';
import Hamburguer from './Hamburguer';
import styles from "./header.module.css";

export default function Header({ links }) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <a href="#" aria-label="Top">
                    <Image
                        src="/assets/logo.png"
                        fill
                        role="presentation"
                    />
                </a>
            </div>
            <Hamburguer links={links} />
            <nav className={[styles.nav, styles.horizontalNav].join(' ')}>
                <ul>
                    {links.map((link) => (
                    <li key={useId()}>
                        <a href={link.src}>{link.value}</a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
