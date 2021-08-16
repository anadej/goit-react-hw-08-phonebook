import React from "react";
import { connect } from "react-redux";
import { ContactsListStyled } from "./ContactsListStyled";
import { deleteContactOperation } from "../../redux/contacts/contactsOperations";
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors";
import sprite from "../../icons/project_sprites.svg";
import Table from "react-bootstrap/Table";

const ContactsList = ({ contacts, deleteContactOperation }) => {
  let i = 0;
  return (
    <ContactsListStyled>
      <Table bordered striped hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{++i}</td>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button
                  className="contactDeleteBtn"
                  type="button"
                  onClick={() => deleteContactOperation(contact.id)}
                >
                  <svg className="icon-user">
                    <use href={sprite + "#icon-bin"} />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <ul>
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
      </ul> */}
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
