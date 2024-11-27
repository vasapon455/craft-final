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
        <section>
        <h2 className="contact-header">Telephone</h2>
        <p className="contact-info">{mobile}</p>
        </section>
        <section>
        <h2 className="contact-header">Email Address</h2>
        <p className="contact-info">{emailAddress}</p>
        </section>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContactUs;
