"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform
} from "framer-motion";
import styles from "./projects.module.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
//   const ref = useRef(null);

//   const isInView = useInView(ref)
//   let style = {}
//   if (isInView) {
//       const { scrollYProgress } = useScroll({ target: ref });
//       const y = useParallax(scrollYProgress, 300);
//       style = { y }
//   }

  return (
    <section className={styles.section}>
      {/* <div ref={ref}>
        <img className={styles.img} src={`/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2 className={styles.h2} style={style}>{`#00${id}`}</motion.h2> */}
    </section>
  );
}

export default function Projects() {
    const containerRef = useRef(null);
    // const isInView = useInView(containerRef);

    // if (isInView)
    //     document.documentElement.classList.add('fixed-scroll')
    // else 
    //     document.documentElement.classList.remove('fixed-scroll')
    
  return (
    <div ref={containerRef}>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
    </div>
  );
}
