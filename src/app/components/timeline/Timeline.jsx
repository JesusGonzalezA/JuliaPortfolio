"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Zink from './Zink';
import ZinkTrainee from './ZinkTrainee';
import HierbabuenaHerboristeria from './HierbabuenaHerboristeria';
import Press from './Press';

export default function ExpTimeline() {
  return (
    <Timeline position='alternate'>
      <Zink />
      <ZinkTrainee />
      <HierbabuenaHerboristeria />
      <Press />
    </Timeline>
  );
}