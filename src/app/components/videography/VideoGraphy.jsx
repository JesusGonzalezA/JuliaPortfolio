"use client";
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CardList from '../card/CardList';
import projects from "../../data/projects";

export default function AboutMe () {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <h2 ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>Videography</h2>
            <CardList cards={projects} />
        </>
    )
}