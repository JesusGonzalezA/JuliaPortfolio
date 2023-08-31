import { Divider } from "@mui/material";
import styles from "./footer.module.css";

export default function Footer () {
    return (
        <footer className={styles.footer}>
          <Divider />
          <div>
            <ul>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#about_me">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <p>@2023 Spain.</p>
          </div>
        </footer>
    )
} 