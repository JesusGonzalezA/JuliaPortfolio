"use client";

import { useEffect, useId, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./horizontalscroll.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll ({views}) {
    const panels = useRef([]);
    const panelsContainer = useRef(null);

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                start: `top ${window.innerHeight / 10}px`,
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);

    return (
        <div ref={panelsContainer} className={styles.container}>
            {
                views.map((view, index) => 
                    <div ref={(e) => createPanelsRefs(e, index)} key={useId()} className={styles.panel}>
                        { view }
                    </div>
                )
            }
        </div>
    )
}