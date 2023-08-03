"use client";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "./Card";
import styles from "./card.module.css";
import animationStyles from "./animation.module.css";

export default function CardList({ cards }) {
  return (
    <ul>
        <TransitionGroup className={styles.card_container}>
            {cards.map((card, index) => (
                <CSSTransition key={index} classNames={styles.fade} timeout={1000}>
                    <li>
                        <Card {...card} />
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </ul>
  );
}
