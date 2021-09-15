import React from "react";
import Collapsible from "react-collapsible";

import { useForm, useField, splitFormProps } from "react-form";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "./context/context";

import {
  validateRequired,
  validateNumber,
  validateEmail,
  validateWebsite,
  validatePhone,
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

const CreateForm = () => {
  let { companiesList, setCompaniesList } = useGlobalContext();

  const history = useHistory();

  // Use the useForm hook to create a form instance
  const {
    Form,
    meta: { canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      let newList = companiesList;
      let newObj = { ...values, status: "Researching" };
      newList.push(newObj);
      setCompaniesList(newList);
      history.push("/");
    },
  });

  return (
    <StyledForm>
      <Form className="card">
        <h1>Add a Company</h1>
        <div className="inputGroup">
          <label className="inputLabel">Company Name: </label>
          <InputField
            className="inputField"
            field="name"
            validate={validateRequired}
          />
        </div>
        <Collapsible trigger={"+ Add Info"}>
            <div className="inputGroup">
              <label className="inputLabel">Industry: </label>
              <InputField className="inputField" field="info.industry" />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Company Size: </label>
              <InputField
                className="inputField"
                field="info.companySize"
                validate={validateNumber}
              />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Headquarters:</label>
              <InputField className="inputField" field="info.headquarters" />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Founding Year: </label>
              <InputField
                className="inputField"
                field="info.foundingYear"
                validate={validateNumber}
              />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Website:</label>
              <InputField className="inputField" field="info.website" validate={validateWebsite}/>
            </div>
        </Collapsible>

        <Collapsible trigger={"+ Add Finances"}>
            <div className="inputGroup">
              <label className="inputLabel">Total Assets: </label>
              <InputField
                className="inputField"
                field="finances.assets"
                validate={validateNumber}
              />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Total Liabilities: </label>
              <InputField
                className="inputField"
                field="finances.liabilities"
                validate={validateNumber}
              />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Total Income: </label>
              <InputField
                className="inputField"
                field="finances.income"
                validate={validateNumber}
              />
            </div>{" "}
            <div className="inputGroup">
              <label className="inputLabel">Total Expenses: </label>
              <InputField
                className="inputField"
                field="finances.expenses"
                validate={validateNumber}
              />
            </div>
        </Collapsible>

        <Collapsible trigger={"+ Add Contact"}>
            <div className="inputGroup">
              <label className="inputLabel">First Name:</label>
              <InputField className="inputField" field="contact.firstName" />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Last Name:</label>
              <InputField className="inputField" field="contact.lastName" />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Position:</label>
              <InputField className="inputField" field="contact.position" />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Email:</label>
              <InputField
                className="inputField"
                field="contact.email"
                validate={validateEmail}
              />
            </div>
            <div className="inputGroup">
              <label className="inputLabel">Phone:</label>
              <InputField
                className="inputField"
                field="contact.phone"
                validate={validatePhone}
              />
            </div>
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
export default CreateForm;
