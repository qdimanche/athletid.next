import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from "styled-components";

const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
        boxShadow: 'none', // this styles directly apply to accordion
        border: `none`,
        '&:before': {
            display:'none',
        },
        '.MuiTypography-root' : {
            fontFamily : 'SF Pro',
        }
    };
});

export default function SimpleAccordion() {

    return (
        <CustomAccordion className={'!shadow-none rounded-[8px]'}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon className={"text-black"}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={'!text-[16px] !leading-[20px] !font-[500]'}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className={"text-[12px] md:text-[14px] leading-[14px] md:leading-[24px] text-[#C0C0C0]"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </CustomAccordion>
    )
}