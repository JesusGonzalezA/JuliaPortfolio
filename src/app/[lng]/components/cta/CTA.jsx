"use client";
import { useEffect, useRef } from "react";
import va from '@vercel/analytics';
import styles from "./cta.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../../../i18n/client";

export default function CTA({ lng }) {
  const { t } = useTranslation(lng);
  const ctaSection = useRef(null);
  const ctaButton = useRef(null);
  const ctaP = useRef(null);

  const handleScroll = (e) => {
    const stickyHeaderWidth = window.innerHeight/10
    const buttonWidth = ctaButton.current.getBoundingClientRect().height
    const buttonYPos = ctaButton.current.offsetTop
    const pMarginBottom = parseInt(document.defaultView.getComputedStyle(ctaP.current).marginBottom)
    const limit = buttonYPos - stickyHeaderWidth - buttonWidth - pMarginBottom

    ctaSection.current.style.zIndex = (window.scrollY < limit) ? 0 : -1
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    handleScroll()
  }, [])

  const handleOnClickResume = () => {
    va("resume")
  }
  
  const handleOnClickContactEmail = () => {
    va("contact by email")
  }

  return (
    <>
      <section className={styles.greeting} ref={ctaSection}>
          <h2>Julia Garbín Lourido</h2>
          <p ref={ctaP}>{t("jobTitle")}</p>
          <div className={styles.buttonWrapper}>
            <a href="/assets/CVJuliaGarbinLourido.pdf" className={styles.downloadButton} download onClick={handleOnClickResume}>{t("resume")} <FontAwesomeIcon icon={faFileDownload} /></a>
            <a href="mailto:jugarlou@gmail.com" target="_blank" ref={ctaButton} className={styles.ctaButton} onClick={handleOnClickContactEmail}>
              {t("cta")} <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
      </section>
      <div aria-hidden="true" className={styles.greetingTransparent}></div>
    </>
  );
}
