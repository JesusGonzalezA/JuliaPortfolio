"use client";
import Card from "./Card";
import styles from "./card.module.css";

export default function CardList({ cards }) {
  return (
    <ul className={styles.card_container}>
        {cards.map((card, index) => (
            <li key={index}>
                <Card {...card} />
            </li>
        ))}
    </ul>
  );
}
