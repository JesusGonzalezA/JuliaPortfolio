"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Zink from './Zink';
import ZinkTrainee from './ZinkTrainee';
import HierbabuenaHerboristeria from './HierbabuenaHerboristeria';
import Press from './Press';
import { useInView } from 'framer-motion';

export default function ExpTimeline() {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <h2 ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>Experience</h2>
      <Timeline position='alternate'>
        <Zink />
        <ZinkTrainee />
        <HierbabuenaHerboristeria />
        <Press />
      </Timeline>
    </>
  );
}