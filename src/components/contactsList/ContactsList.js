import React from "react";
import { connect } from "react-redux";
import { ContactsListStyled } from "./ContactsListStyled";
import { deleteContactOperation } from "../../redux/contacts/contactsOperations";
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors";

const ContactsList = ({ contacts, deleteContactOperation }) => {
  return (
    <ContactsListStyled>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="contactBtn"
              type="button"
              onClick={() => deleteContactOperation(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ContactsListStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    //в state передаем сразу отфильтрованные массив номеров, по актуальному значению поля filtr
    contacts: getFilteredContacts(state),
  };
};

export default connect(mapStateToProps, { deleteContactOperation })(
  ContactsList
);
