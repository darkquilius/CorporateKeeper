import React from "react";
import Collapsible from "react-collapsible";

import { useForm, useField, splitFormProps } from "react-form";
import { useHistory, useLocation } from "react-router-dom";
import { useGlobalContext } from "./context/context";

import { validateRequired, validateNumber, validateEmail } from "../utils/formValidations";

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
      let newObj = { ...values };
      let index = newList.findIndex((obj) => obj.name === name);
      newList[index] = newObj;
      setCompaniesList(newList);
      history.push("/");
    },
  });

  return (
    <Form>
      <h1>Edit <span>{name}</span></h1>
      <div>
        <label>
          Company Name:{" "}
          <InputField
            field="name"
            defaultValue={name ? name : undefined}
            validate={validateRequired}
          ></InputField>
        </label>
      </div>
      <div>
        <label>
          Status:{" "}
          <InputField
            field="status"
            defaultValue={status ? status : undefined}
            validate={validateRequired}
          ></InputField>
        </label>
      </div>
      <Collapsible trigger={"+ Add Info"}>
        <div>
          <div>
            <label>
              Industry:{" "}
              <InputField
                defaultValue={industry ? industry : undefined}
                field="info.industry"
              />
            </label>
          </div>
          <div>
            <label>
              Company Size:{" "}
              <InputField
                field="info.companySize"
                defaultValue={companySize ? companySize : undefined}
                validate={validateNumber}
              />
            </label>
          </div>
          <div>
            <label>
              Headquarters:{" "}
              <InputField
                field="info.headquarters"
                defaultValue={headquarters ? headquarters : undefined}
              />
            </label>
          </div>
          <div>
            <label>
              Founding Year:{" "}
              <InputField
                field="info.foundingYear"
                defaultValue={foundingYear ? foundingYear : undefined}
                validate={validateNumber}
              />
            </label>
          </div>
          <div>
            <label>
              Website:{" "}
              <InputField
                field="info.website"
                defaultValue={website ? website : undefined}
              />
            </label>
          </div>
        </div>
      </Collapsible>

      <Collapsible trigger={"+ Add Finances"}>
        <div>
          <div>
            <label>
              Total Assets:{" "}
              <InputField
                field="finances.assets"
                defaultValue={assets ? assets : undefined}
                validate={validateNumber}
              />
            </label>
          </div>
          <div>
            <label>
              Total Liabilities:{" "}
              <InputField
                field="finances.liabilities"
                defaultValue={liabilities ? liabilities : undefined}
                validate={validateNumber}
              />
            </label>
          </div>
          <div>
            <label>
              Total Income:{" "}
              <InputField
                field="finances.income"
                defaultValue={income ? income : undefined}
                validate={validateNumber}
              />
            </label>
          </div>{" "}
          <div>
            <label>
              Total Expenses:{" "}
              <InputField
                field="finances.expenses"
                defaultValue={expenses ? expenses : undefined}
                validate={validateNumber}
              />
            </label>
          </div>
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
  );
};

export default EditForm;

const ContactDiv = ({ firstName, lastName, position, email, phone }) => (
  <div>
    <div>
      <label>
        First Name:{" "}
        <InputField
          field="contact.firstName"
          defaultValue={firstName ? firstName : undefined}
        />
      </label>
    </div>
    <div>
      <label>
        Last Name:{" "}
        <InputField
          field="contact.lastName"
          defaultValue={lastName ? lastName : undefined}
        />
      </label>
    </div>
    <div>
      <label>
        Position:{" "}
        <InputField
          field="contact.position"
          defaultValue={position ? position : undefined}
        />
      </label>
    </div>
    <div>
      <label>
        Email:{" "}
        <InputField
          field="contact.email"
          defaultValue={email ? email : undefined}
          validate={validateEmail}
        />
      </label>
    </div>
    <div>
      <label>
        Phone:{" "}
        <InputField
          field="contact.phone"
          defaultValue={phone ? phone : undefined}
          validate={validateNumber}
        />
      </label>
    </div>
  </div>
);
