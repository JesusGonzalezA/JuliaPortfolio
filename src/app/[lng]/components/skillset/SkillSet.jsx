"use client";
import * as React from 'react';
import styles from "./skillset.module.css";
import { useTranslation } from '../../../i18n/client';

export default function SkillSet({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <h2>{t("skills")}</h2>
      <div>
          <ul className={styles.skillset}>
              <li>{t("skill1")}</li>
              <li>{t("skill2")}</li>
              <li>{t("skill3")}</li>
              <li>{t("skill4")}</li>
              <li>{t("skill5")}</li>
              <li>{t("skill6")}</li>
              <li>{t("skill7")}</li>
              <li>{t("skill8")}</li>
              <li>{t("skill9")}</li>
          </ul>
      </div>
    </>
  );
}