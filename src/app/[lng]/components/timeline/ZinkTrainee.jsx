"use client";
import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTranslation } from '../../../i18n/client';

export default function ZinkTrainee({ lng, position }) {
    const { t } = useTranslation(lng);

    return (
        <TimelineItem position={position}>
            <TimelineOppositeContent color="text.secondary" sx={{ alignSelf: 'center' }}>
                {t("zinkPositionTrainee")}
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ alignSelf: 'center' }}>
            </TimelineContent>
        </TimelineItem>
    )
}