import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  expand_icon: {
    color: "white",
  },
  heading: {
    color: "#FFF",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightLight,
  },
  expandedPanel: {
    color: "#fff",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightLight,
  },
}));

const Faqs = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <!-- FAQs --> */}
      <section className="faqs">
        <div className="container">
          <h3
            className="fw-bold text-center text-uppercase"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Frequently Asked questions (FAQs)
          </h3>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="accordion"
                id="faq-accordion"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className={classes.root}>
                  <Accordion
                    style={{
                      backgroundColor: "#262626",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        What is ZuluCast?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.expandedPanel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus quidem soluta voluptatem, impedit fuga
                        cumque libero nemo, voluptatum temporibus, error dolor
                        neque molestias maxime facilis ut quisquam enim
                        excepturi iste.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <br />
                  <Accordion
                    style={{
                      backgroundColor: "#262626",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Where can i watch Zulucast?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.expandedPanel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus quidem soluta voluptatem, impedit fuga
                        cumque libero nemo, voluptatum temporibus, error dolor
                        neque molestias maxime facilis ut quisquam enim
                        excepturi iste.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <br />
                  <Accordion
                    style={{
                      backgroundColor: "#262626",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        How do i cancel/leave?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.expandedPanel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus quidem soluta voluptatem, impedit fuga
                        cumque libero nemo, voluptatum temporibus, error dolor
                        neque molestias maxime facilis ut quisquam enim
                        excepturi iste.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <br />
                  <Accordion
                    style={{
                      backgroundColor: "#262626",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        What can i watch on zulucast?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.expandedPanel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus quidem soluta voluptatem, impedit fuga
                        cumque libero nemo, voluptatum temporibus, error dolor
                        neque molestias maxime facilis ut quisquam enim
                        excepturi iste.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Faqs;
