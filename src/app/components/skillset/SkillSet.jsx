"use client";
import * as React from 'react';
import styles from "./skillset.module.css";

export default function SkillSet() {
  return (
    <>
      <h2>Skills</h2>
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