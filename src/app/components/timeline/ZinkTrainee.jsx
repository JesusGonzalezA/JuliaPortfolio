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

export default function ZinkTrainee() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                <Typography align='right'>Digital marketing trainee</Typography>
                <Divider />
                <List>
                    <ListItem sx={{ justifyContent: 'flex-end' }}>Social media strategy and management at eMallorca Experience Week</ListItem>
                    <ListItem>Creativities creation</ListItem>
                    <ListItem>ORM</ListItem>
                </List>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span">
                    Zink Marketing <br />
                </Typography>
                <Chip label='Feb 2023 - Apr 2023' variant='outlined' />
            </TimelineContent>
        </TimelineItem>
    )
}