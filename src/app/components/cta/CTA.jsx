"use client";
import { useEffect, useRef } from "react";
import styles from "./cta.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function CTA() {
  const ctaSection = useRef(null)
  const ctaButton = useRef(null)

  const handleScroll = (e) => {
    if ((window.scrollY + 50) > ctaButton.current.getBoundingClientRect().top) {
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
          <a href="https://www.linkedin.com/in/jgarbin/" target="_blank" ref={ctaButton} className={styles.ctaButton}>
            Contact me <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
      </section>
      <div aria-hidden="true" className={styles.greetingTransparent}></div>
    </>
  );
}
