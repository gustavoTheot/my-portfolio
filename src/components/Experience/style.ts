import styled from "styled-components";

import { TimelineContent } from "@mui/lab";
import Timeline from '@mui/lab/Timeline';


export const StyledTimelineContent = styled(TimelineContent)`
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;

    .typographyUseTecnolog{
        margin-top: 1rem;
    }
`

export const StyledTimeline = styled(Timeline)`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiTimelineItem-root::before{
        content: none;
    }

   .TimelineOppositeContent{
        width: 10rem;
        transition-duration: .2s;
        transition-timing-function: ease-in;

        @media screen and (max-width: 1136px){
        width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   }

   
`

export const TypeContainer = styled.span`
   display: flex;
   flex-wrap: wrap;
   max-width: 50rem;
   gap: 0.875rem;

   margin-top: 0.875rem;
`

export const Type = styled.span`
    color: ${props => props.theme['blue']};
    padding: 0.525rem 1rem 0.525rem 1rem;
    background-color: ${props => props.theme['blue-opacity']};
    border-radius: 14px;
    
`

export const PathContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

