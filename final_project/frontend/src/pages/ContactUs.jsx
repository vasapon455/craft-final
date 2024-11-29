import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Container } from "react-bootstrap";
import '../styles/contact-us.css'

const ContactUs = () => {
 const mobile = '084-640-0890'
 const emailAddress = '6780367726@student.chula.ac.th'
  return (
    <Layout>
      <Section header="Contact Us">
        <Container className="contact-inner">
        <section >
        <h2 className="paragraph black underline">Telephone</h2>
        <p className="sub-heading black">{mobile}</p>
        </section>
        <section>
        <h2 className="paragraph black underline" >Email Address</h2>
        <p className="sub-heading black">{emailAddress}</p>
        </section>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContactUs;
