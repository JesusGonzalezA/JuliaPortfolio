"use client";
import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Press() {
    return (
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" sx={{ alignSelf: 'center' }}>
                Press photography assistant
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ alignSelf: 'center' }}>
                Lanfoco SL
            </TimelineContent>
        </TimelineItem>
    )
}