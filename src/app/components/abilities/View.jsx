import Image from 'next/image';
import styles from './view.module.css';

export default function View ({ title, content, imageSrc, alt }) {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.viewContainer}>
                    <h3>{ title }</h3>
                    { content }
                </div>
            </div>
            <div>
                <div className={styles.imgContainer}>
                    <Image
                        src={imageSrc}
                        fill
                        alt={alt}
                    />
                </div>
            </div>
        </div>
    )
}