import * as React from 'react';
import Image from 'next/image';
import styles from "./skillset.module.css";

export default function SkillSet() {
  return (
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
  );
}