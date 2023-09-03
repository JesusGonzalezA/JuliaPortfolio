import Image from 'next/image';
import { useId } from 'react';
import Hamburguer from './Hamburguer';
import styles from "./header.module.css";
import { languages } from '../../../i18n/settings';

export default function Header({ links, lng }) {
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
            {languages
                .filter((l) => lng !== l)
                .map((l) => (
                    <span key={l}>
                        <a href={`/${l}`}>
                            {l} version
                        </a>
                    </span>
                ))
            }
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
