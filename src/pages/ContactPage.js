import React from "react";
import Filter from "../components/filter/Filter";
import ContactsForm from "../components/contactsForm/ContactsForm";
import ContactsList from "../components/contactsList/ContactsList";
import Section from "../components/Section";

const ContactPage = () => {
  return (
    <>
      <Section title={"Add new contact:"}>
        <ContactsForm />
      </Section>
      <Section title={"List of contacts:"}>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default ContactPage;
