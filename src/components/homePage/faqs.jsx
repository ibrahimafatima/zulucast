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
                {/* <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What is ZuluCast?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus quidem soluta voluptatem, impedit fuga cumque
                      libero nemo, voluptatum temporibus, error dolor neque
                      molestias maxime facilis ut quisquam enim excepturi iste.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Is ZuluCast Free?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus quidem soluta voluptatem, impedit fuga cumque
                      libero nemo, voluptatum temporibus, error dolor neque
                      molestias maxime facilis ut quisquam enim excepturi iste.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Where can i watch ZuluCast?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deserunt sit asperiores veniam officiis dolor labore,
                      autem nam, delectus, quidem totam aliquam vel? Fugit, ut
                      rem minima reiciendis perspiciatis velit dolor?
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How do i cancel/leave?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quos magni nobis eum, qui, assumenda corporis ipsa
                      laudantium accusamus enim officiis repellat dolor
                      temporibus alias facere nisi modi aut aspernatur
                      consectetur.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      What can i watch on ZuluCast?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum beatae, mollitia illum assumenda dicta enim aut
                      pariatur sunt sapiente ipsa ex, voluptatum non eaque iste
                      minima totam officiis, ducimus illo?
                    </div>
                  </div>
                </div> */}
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
