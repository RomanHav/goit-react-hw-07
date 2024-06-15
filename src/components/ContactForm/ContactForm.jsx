import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from "../../redux/contactsOps.js";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const id = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too short!")
      .max(14, "Too long!")
      .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Invalid number format")
      .required("Required"),
  });

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const onSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={`${id}-name`}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={`${id}-name`}
            className={css.formInput}
            placeholder="Alex"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={`${id}-number`}>Number</label>
          <Field
            type="tel"
            name="number"
            id={`${id}-number`}
            className={css.formInput}
            placeholder="432-11-55"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
