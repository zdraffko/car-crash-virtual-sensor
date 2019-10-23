import { useState } from "react";

const useFormValidation = (initialFormState) => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleValueChange = (event) => setFormValues({
    ...formValues,
    [event.target.name]: event.target.value
  });

  return { formValues, handleValueChange };
};

export default useFormValidation;
