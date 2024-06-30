import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from "@mui/material";
import { IconProps } from "phosphor-react";
import { StyledTimeline, StyledTimelineContent, Type, TypeContainer } from './style';

interface ExperienceProps {
    title: string,
    date: string,
    description: string,
    skill: string[]
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export function Experience({
    title, date, description, skill, icon: Icon
}: ExperienceProps) {
    return (
        <StyledTimeline>
            <TimelineItem>
                <div className='TimelineOppositeContent'>
                    <TimelineOppositeContent
                        sx={{ marginTop: '10px' }}
                        align="right"
                        variant="body2"
                    >
                        {date}
                    </TimelineOppositeContent>
                </div>

                <TimelineSeparator>
                    <TimelineDot>
                        <Icon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <StyledTimelineContent sx={{ py: '12px', px: 4 }}>
                    <Typography variant="h6" component="span">
                        {title}
                    </Typography>
                    <Typography style={{
                        textAlign: 'justify'
                    }}>
                        {description}
                    </Typography>
                    <div className='typographyUseTecnolog'>
                        <Typography variant="h6" component="span">
                            Técnologias e Ferramentas utilizadas:
                        </Typography>
                        <Typography>
                            <TypeContainer>
                                {
                                    skill.map(item => (
                                        <Type className='type'>{item}</Type>
                                    ))
                                }
                            </TypeContainer>
                        </Typography>
                    </div>

                </StyledTimelineContent>
            </TimelineItem>
        </StyledTimeline >
    )
}