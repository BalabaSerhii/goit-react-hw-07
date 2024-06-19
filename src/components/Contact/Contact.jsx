
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from './Contact.module.css'

const Contact = ({ data: { id, name, number } }) => {

    const dispatch = useDispatch();

    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <p><IoPersonSharp className={css.icon} />{name}</p>
                <p><FaPhone className={css.icon} />{number}</p>
            </div>
            <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    )
}

export default Contact;