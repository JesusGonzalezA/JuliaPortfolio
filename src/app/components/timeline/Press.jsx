"use client";
import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Chip, Divider, List, ListItem } from '@mui/material';

export default function Press() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <Typography align='right'>Press photography assistant</Typography>
                <Divider />
                <List>
                    <ListItem sx={{ justifyContent: 'flex-end' }}>Local press photography</ListItem>
                </List>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span">
                    Lanfoco SL <br />
                </Typography>
                <Chip label='Apr 2019 - Oct 2019' variant='outlined' />
            </TimelineContent>
        </TimelineItem>
    )
}