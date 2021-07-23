import React from "react";
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
                        Zulucast is your destination for quality African Movies.
                        We have an assortment of content and regularly update
                        our library to
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
                        How much does Zulucast cost?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.expandedPanel}>
                        All our movies are at the affordable price point of
                        $0.99 each
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
                        Where can i watch?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.expandedPanel}>
                        You can watch it right here on our website and will soon
                        be available on our Android and iOS apps.
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
                        All the movies on this platform are available to watch
                        without any restrictions. We have also segmented our
                        movies based on language so that you can distinguish
                        between those that are english and non-english.
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
