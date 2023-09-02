"use client";
import { useEffect, useRef } from "react";
import styles from "./cta.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function CTA() {
  const ctaSection = useRef(null)
  const ctaButton = useRef(null)

  const handleScroll = (e) => {
    if (window.scrollY > (ctaButton.current.offsetTop - window.innerHeight/10 - 14)) {
      ctaSection.current.style.zIndex = -1
    } else {
      ctaSection.current.style.zIndex = 0
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <section className={styles.greeting} ref={ctaSection}>
          <h2>Julia Garbín Lourido</h2>
          <p>Digital Specialist</p>
          <div className={styles.buttonWrapper}>
            <a href="/assets/julia_garbin_lourido_cv.pdf" className={styles.downloadButton} download>Resume <FontAwesomeIcon icon={faFileDownload} /></a>
            <a href="https://www.linkedin.com/in/jgarbin/" target="_blank" ref={ctaButton} className={styles.ctaButton}>
              Contact me <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
      </section>
      <div aria-hidden="true" className={styles.greetingTransparent}></div>
    </>
  );
}
