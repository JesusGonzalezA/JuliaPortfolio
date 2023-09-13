"use client";
import { useEffect, useRef } from "react";
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
  }, []);

  return (
    <>
      <section className={styles.greeting} ref={ctaSection}>
          <h2>Julia Garbín Lourido</h2>
          <p ref={ctaP}>{t("jobTitle")}</p>
          <div className={styles.buttonWrapper}>
            <a href={`/assets/CVJuliaGarbinLourido_${lng}.pdf`} className={styles.downloadButton} download>{t("resume")} <FontAwesomeIcon icon={faFileDownload} style={{ maxHeight: '24px'}} /></a>
            <a href="mailto:jugarlou@gmail.com" target="_blank" ref={ctaButton} className={styles.ctaButton}>
              {t("cta")} <FontAwesomeIcon icon={faUpRightFromSquare} style={{ maxHeight: '24px'}} />
            </a>
          </div>
      </section>
      <div aria-hidden="true" className={styles.greetingTransparent}></div>
    </>
  );
}
