"use client";
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CardList from '../card/CardList';
import videography from "../../../data/videography";
import { useTranslation } from '../../../i18n/client';

export default function Videography ({ lng }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation(lng);
    videography.forEach(v => {
        v.title = t(v.titleTranslationId)
        v.alt = t(v.altTranslationId)
        v.content = t(v.contentTranslationId)
    })

    return (
        <>
            <h2 ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>{t("videography")}</h2>
            <CardList cards={videography} lng={lng} />
        </>
    )
}