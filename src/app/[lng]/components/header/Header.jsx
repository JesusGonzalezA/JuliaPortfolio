import Image from 'next/image';
import Hamburguer from './Hamburguer';
import styles from "./header.module.css";
import { languages } from '../../../i18n/settings';

export default function Header({ links, lng }) {
    return (
        <header className={styles.header}>
            <div className={styles.logoOutterContainer}>
                <a className={styles.logoContainer} href="#" aria-label="Top">
                    <Image
                        src="/assets/logo.png"
                        fill
                        role="presentation"
                        alt=""
                        sizes="10vh"
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
                    <li key={link.value}>
                        <a href={link.src}>{link.value}</a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
