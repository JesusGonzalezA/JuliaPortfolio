"use client";
import * as React from 'react';
import styles from "./skillset.module.css";
import { useInView } from 'framer-motion';

export default function SkillSet() {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <h2 ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>Skills</h2>
      <div>
          <ul className={styles.skillset}>
              <li>Strategy execution</li>
              <li>Agile methodologies</li>
              <li>Digital payments</li>
              <li>Marketing strategy</li>
              <li>Analytics</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Teamwork</li>
              <li>Leadership</li>
          </ul>
      </div>
    </>
  );
}