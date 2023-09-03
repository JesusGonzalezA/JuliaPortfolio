"use client";
import { Divider } from "@mui/material";
import styles from "./footer.module.css";
import { useTranslation } from "../../../i18n/client";

export default function Footer ({ lng }) {
  const { t } = useTranslation(lng);

    return (
        <footer className={styles.footer}>
          <Divider />
          <div>
            <ul>
              <li>
                <a href="#experience">{t("experience")}</a>
              </li>
              <li>
                <a href="#about_me">{t("about")}</a>
              </li>
              <li>
                <a href="#">{t("contact")}</a>
              </li>
            </ul>

            <p>@2023 Spain.</p>
          </div>
        </footer>
    )
} 