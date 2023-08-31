import Image from 'next/image';
import styles from './view.module.css';

export default function AboutMe () {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/assets/portrait.jpeg"
                        fill
                        alt={"Julia Garbin"}
                    />
                </div>
            </div>
            <div>
                <div className={styles.viewContainer}>
                    <div>
                        <p>
                        I am graduated in advertising and public relations with a passion for
                        the world of social media. In recent months, I have taken my
                        creativity and skills to the next level through digital marketing,
                        discovering a new passion.
                        </p>

                        <p>
                        My experience abroad has also been instrumental in my development. For
                        nine months, I had the opportunity to live in Lithuania, immersing
                        myself in a completely different culture. This experience has taught
                        me to step out of my comfort zone without difficulty, and to enjoy the
                        company of people from different cultures.
                        </p>

                        <p>
                        That is why I am ready to take on any challenge that comes my way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}