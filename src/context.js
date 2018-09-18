import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John doe",
        email: "adasdad@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Jessica kurniawan",
        email: "jkurniaw@gmail.com",
        phone: "519-725-6279"
      },
      {
        id: 3,
        name: "gabby lyona",
        email: "lyona@gmail.com",
        phone: "123-456-1111"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
