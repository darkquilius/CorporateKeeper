import React from "react";
import Collapsible from "react-collapsible";

import { useForm, useField, splitFormProps } from "react-form";
import { useHistory } from "react-router-dom";
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
    <Form>
      <h1>Add a Company</h1>
      <div>
        <label>
          Company Name: <InputField field="name" validate={validateRequired} />
        </label>
      </div>
      <Collapsible trigger={"+ Add Info"}>
        <div>
          <div>
            <label>
              Industry: <InputField field="info.industry" />
            </label>
          </div>
          <div>
            <label>
              Company Size:{" "}
              <InputField field="info.companySize" validate={validateNumber} />
            </label>
          </div>
          <div>
            <label>
              Headquarters: <InputField field="info.headquarters" />
            </label>
          </div>
          <div>
            <label>
              Founding Year:{" "}
              <InputField field="info.foundingYear" validate={validateNumber} />
            </label>
          </div>
          <div>
            <label>
              Website: <InputField field="info.website" />
            </label>
          </div>
        </div>
      </Collapsible>

      <Collapsible trigger={"+ Add Finances"}>
        <div>
          <div>
            <label>
              Total Assets:{" "}
              <InputField field="finances.assets" validate={validateNumber} />
            </label>
          </div>
          <div>
            <label>
              Total Liabilities:{" "}
              <InputField
                field="finances.liabilities"
                validate={validateNumber}
              />
            </label>
          </div>
          <div>
            <label>
              Total Income:{" "}
              <InputField field="finances.income" validate={validateNumber} />
            </label>
          </div>{" "}
          <div>
            <label>
              Total Expenses:{" "}
              <InputField field="finances.expenses" validate={validateNumber} />
            </label>
          </div>
        </div>
      </Collapsible>

      <Collapsible trigger={"+ Add Contact"}>
        <div>
          <div>
            <label>
              First Name:
              <InputField field="contact.firstName" />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <InputField field="contact.lastName" />
            </label>
          </div>
          <div>
            <label>
              Position:
              <InputField field="contact.position" />
            </label>
          </div>
          <div>
            <label>
              Email:
              <InputField field="contact.email" validate={validateEmail} />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <InputField field="contact.phone" validate={validateNumber} />
            </label>
          </div>
        </div>
      </Collapsible>

      <div>
        <button type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </div>
    </Form>
  );
};
export default CreateForm;
