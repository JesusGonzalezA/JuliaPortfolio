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

export default function Zink() {
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
                    <ListItem>ORM, SEO and Copy</ListItem>
                    <ListItem>OFF and ON media management</ListItem>
                    <ListItem>Web auditing</ListItem>
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
                <Chip label='Apr 2023 - Jul 2023' variant='outlined' />
            </TimelineContent>
        </TimelineItem>
    )
}