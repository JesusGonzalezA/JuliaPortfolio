"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Zink from './Zink';
import ZinkTrainee from './ZinkTrainee';
import HierbabuenaHerboristeria from './HierbabuenaHerboristeria';
import Press from './Press';
import { useInView } from 'framer-motion';
import { useTranslation } from '../../../i18n/client';

export default function ExpTimeline({ lng }) {
  const { t } = useTranslation(lng);
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });
  
  return (
    <>
      <h2 ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>{t("experience")}</h2>
      <Timeline>
        <Zink lng={lng}  position='right' />
        <ZinkTrainee lng={lng}  position='right' />
        <HierbabuenaHerboristeria lng={lng}  position='left' />
        <Press lng={lng} position='right' />
      </Timeline>
    </>
  );
}