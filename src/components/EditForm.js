import React from "react";
import Collapsible from "react-collapsible";

import { useForm, useField, splitFormProps } from "react-form";
import { useHistory, useLocation } from "react-router-dom";
import { useGlobalContext } from "./context/context";

import {
  validateRequired,
  validateNumber,
  validateEmail,
} from "../utils/formValidations";
import { StyledForm } from "./FormStyles";

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField(field, fieldOptions);

  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest })} />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
});

const EditForm = () => {
  let { companiesList, setCompaniesList } = useGlobalContext();

  const history = useHistory();

  let { name, status, contact } = useLocation().state;
  let { assets, expenses, income, liabilities } =
    useLocation().state.finances ?? {};
  let { industry, companySize, headquarters, foundingYear, website } =
    useLocation().state.info ?? {};

  // Use the useForm hook to create a form instance
  const {
    Form,
    meta: { canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      let newList = companiesList;
      let {picture} = contact ?? {};
      picture? values.contact.picture = picture: values.contact.picture = null;
      let newObj = { ...values, contact: {...values.contact, picture: `${picture?picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwVm7UV1DxZ-d7pwo96Moy4isTIAKOXrRvg&usqp=CAU"}`}};
      let index = newList.findIndex((obj) => obj.name === name);
      newList[index] = newObj;
      setCompaniesList(newList);
      history.push("/");
    },
  });

  return (
    <StyledForm>
      <Form className="card">
        <h1>
          Edit <span>{name}</span>
        </h1>
        <div className="inputGroup">
          <label className="inputLabel">Company Name: </label>
          <InputField
            className="inputField"
            field="name"
            defaultValue={name ? name : undefined}
            validate={validateRequired}
          />
        </div>
        <div className="inputGroup">
          <label className="inputLabel">Status: </label>
          <InputField
            className="inputField"
            field="status"
            defaultValue={status ? status : undefined}
            validate={validateRequired}
          />
        </div>
        <Collapsible trigger={"+ Add Info"}>
          <div className="inputGroup">
            <label className="inputLabel">Industry: </label>
            <InputField
              className="inputField"
              defaultValue={industry ? industry : undefined}
              field="info.industry"
            />
          </div>
          <div className="inputGroup">
            <label className="inputLabel">Company Size: </label>
            <InputField
              className="inputField"
              field="info.companySize"
              defaultValue={companySize ? companySize : undefined}
              validate={validateNumber}
            />
          </div>
          <div className="inputGroup">
            <label className="inputLabel">Headquarters: </label>
            <InputField
              className="inputField"
              field="info.headquarters"
              defaultValue={headquarters ? headquarters : undefined}
            />
          </div>
          <div className="inputGroup">
            <label className="inputLabel">Founding Year: </label>
            <InputField
              className="inputField"
              field="info.foundingYear"
              defaultValue={foundingYear ? foundingYear : undefined}
              validate={validateNumber}
            />
          </div>
          <div className="inputGroup">
            <label className="inputLabel">Website: </label>
            <InputField
              className="inputField"
              field="info.website"
              defaultValue={website ? website : undefined}
            />
          </div>
        </Collapsible>

        <Collapsible trigger={"+ Add Finances"}>
          <div className="inputGroup">
            <label className="inputLabel">Total Assets: </label>
            <InputField
              className="inputField"
              field="finances.assets"
              defaultValue={assets ? assets : undefined}
              validate={validateNumber}
            />
          </div>
          <div className="inputGroup">
            <label className="inputLabel">Total Liabilities: </label>
            <InputField
              className="inputField"
              field="finances.liabilities"
              defaultValue={liabilities ? liabilities : undefined}
              validate={validateNumber}
            />
          </div>
          <div className="inputGroup">
            <label className="inputLabel">Total Income: </label>
            <InputField
              className="inputField"
              field="finances.income"
              defaultValue={income ? income : undefined}
              validate={validateNumber}
            />
          </div>{" "}
          <div className="inputGroup">
            <label className="inputLabel">Total Expenses: </label>
            <InputField
              className="inputField"
              field="finances.expenses"
              defaultValue={expenses ? expenses : undefined}
              validate={validateNumber}
            />
          </div>
        </Collapsible>

        <Collapsible trigger={"+ Add Contact"}>
          <ContactDiv {...contact} />
        </Collapsible>

        <div>
          <button type="submit" disabled={!canSubmit}>
            Submit
          </button>
        </div>
      </Form>
    </StyledForm>
  );
};

export default EditForm;

const ContactDiv = ({ firstName, lastName, position, email, phone }) => (
  <div>
    <div className="inputGroup">
      <label className="inputLabel">First Name: </label>
      <InputField
        className="inputField"
        field="contact.firstName"
        defaultValue={firstName ? firstName : undefined}
      />
    </div>
    <div className="inputGroup">
      <label className="inputLabel">Last Name: </label>
      <InputField
        className="inputField"
        field="contact.lastName"
        defaultValue={lastName ? lastName : undefined}
      />
    </div>
    <div className="inputGroup">
      <label className="inputLabel">Position: </label>
      <InputField
        className="inputField"
        field="contact.position"
        defaultValue={position ? position : undefined}
      />
    </div>
    <div className="inputGroup">
      <label className="inputLabel">Email: </label>
      <InputField
        className="inputField"
        field="contact.email"
        defaultValue={email ? email : undefined}
        validate={validateEmail}
      />
    </div>
    <div className="inputGroup">
      <label className="inputLabel">Phone: </label>
      <InputField
        className="inputField"
        field="contact.phone"
        defaultValue={phone ? phone : undefined}
        validate={validateNumber}
      />
    </div>
  </div>
);
