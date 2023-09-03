"use client";

import Card from "./Card";

export default function CardList({ cards }) {
  return (
    <ul>
        {cards.map((card, index) => (
            <li key={index}>
                <Card {...card} />
            </li>
        ))}
    </ul>
  );
}
