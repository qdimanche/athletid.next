import React from 'react';
import {AccordionDetails} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordion from '@material-ui/core/Accordion';
import { withStyles } from '@material-ui/core/styles';


const Accordion = withStyles({
    root: {
        color: 'white',
        boxShadow: 'none',
        borderRadius: '10px',
        backgroundColor: '#292D30',
        '&:not(:first-child)': {
            marginTop: '1em',
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);


const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#242629',
        marginBottom: -1,
        color: 'white',
        borderRadius: '10px',
        minHeight: 56,
        '&$expanded': {
            marginTop: '1em',
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);





const Faq = () => {
    return (
        <div>
            <Accordion>

                <AccordionSummary  expandIcon={<ExpandMore />} className={'rounded-[30px]'}>
                    Accordion 1
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </AccordionDetails>

            </Accordion>

            <Accordion>

                <AccordionSummary  expandIcon={<ExpandMore />}>
                    Accordion 2
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </AccordionDetails>

            </Accordion>

            <Accordion>

                <AccordionSummary  expandIcon={<ExpandMore />}>
                    Accordion 2
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </AccordionDetails>

            </Accordion>
        </div>
    );
};

export default Faq;
