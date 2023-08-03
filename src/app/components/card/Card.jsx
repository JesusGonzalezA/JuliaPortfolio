import Image from 'next/image';
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, content, url, imageSrc, alt }) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src={imageSrc}
          fill
          alt={alt}
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{content}</p>
        <a className={styles.link} href={url} target="_blank">
          Visit website &nbsp;
          <FontAwesomeIcon style={{ width: "16px", display: "inline" }} icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
}
