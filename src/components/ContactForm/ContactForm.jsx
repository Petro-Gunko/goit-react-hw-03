import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("Is required!"),
  callnumber: Yup.string()
    .trim()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("Is required!"),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.callnumber,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", callnumber: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage
            className={css.ErrorMessage}
            name="username"
            component="span"
          />
        </div>
        <div className={css.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="number" name="callnumber" id={numberFieldId} />
          <ErrorMessage
            className={css.ErrorMessage}
            name="callnumber"
            component="span"
          />
        </div>
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
