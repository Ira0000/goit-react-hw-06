import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/Contact/selectors";

const ContactList = () => {
  const contactData = useSelector(selectContacts);
  console.log(contactData);

  return (
    <ul className={s.contactCard}>
      {contactData.map((data) => {
        return (
          <li key={data.id}>
            <Contact id={data.id} name={data.name} number={data.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
