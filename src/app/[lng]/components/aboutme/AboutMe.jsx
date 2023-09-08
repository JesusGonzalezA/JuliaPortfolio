"use client";
import Image from 'next/image';
import styles from './view.module.css';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from '../../../i18n/client';

export default function AboutMe ({ lng }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation(lng);

    return (
        <>
            <h2 ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>{t("about")}</h2>
            <div className={styles.container}>
                <div>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/assets/portrait.png"
                            fill
                            alt={"Julia Garbin"}   
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.viewContainer}>
                        <div>
                            <p>{t("aboutMeP1")}</p>

                            <p>{t("aboutMeP2")}</p>

                            <p>{t("aboutMeP3")}</p>

                            <p>{t("aboutMeP4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}