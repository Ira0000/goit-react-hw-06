import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

// import { useEffect, useState } from "react";
// import { nanoid } from "nanoid";

import "./App.css";

// const defaultContactData = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  // const [contactData, setContactData] = useState(() => {
  //   const savedData = JSON.parse(window.localStorage.getItem(`contactData`));
  //   if (savedData !== null) {
  //     return savedData;
  //   }
  //   return defaultContactData;
  // });
  // const [searchName, setSearchName] = useState("");

  // const filteredContactData = contactData.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchName.toLowerCase())
  // );

  //   actions.resetForm();
  // };

  // useEffect(() => {
  //   window.localStorage.setItem("contactData", JSON.stringify(contactData));
  // }, [contactData]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList
      // contactData={filteredContactData}
      // handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
