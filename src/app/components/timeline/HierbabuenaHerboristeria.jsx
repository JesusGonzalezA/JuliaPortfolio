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

export default function HierbabuenaHerboristeria() {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="left"
                variant="body2"
                color="text.secondary"
            >
                <Typography align='left'>Digital specialist and account executive</Typography>
                <Divider />
                <List>
                    <ListItem>Social media scheduling</ListItem>
                    <ListItem>Creativities creation</ListItem>
                    <ListItem>Social media interaction management</ListItem>
                </List>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span">
                    Hierbabuena Herboristeria <br />
                </Typography>
                <Chip label='Sep 2020 - Dec 2020' variant='outlined' />
            </TimelineContent>
        </TimelineItem>
    )
}