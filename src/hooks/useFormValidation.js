import { useState, useEffect } from "react";

const useFormValidation = (initialFormState, validateForm) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [validationErrors, isSubmitting, formValues]);

  const handleValueChange = (event) => setFormValues({
    ...formValues,
    [event.target.name]: event.target.value
  });

  const handleBlur = (event) => {
    const errors = validateForm(formValues);
    let errorMessage = "";
    for (const error of Object.keys(errors)) {
      if (event.target.name === error) {
        errorMessage = errors[error];
      }
    }

    setValidationErrors({ ...validationErrors, [event.target.name]: errorMessage });
  };

  const handleFormSubmit = (event, history) => {
    event.preventDefault();
    setIsSubmitting(true);
    setValidationErrors(validateForm(formValues));
    history.push("/car-crash-results");
  };

  const handleFormReset = () => {
    setFormValues(initialFormState);
  };

  return {
    formValues,
    validationErrors,
    isSubmitting,
    handleValueChange,
    handleBlur,
    handleFormSubmit,
    handleFormReset
  };
};

export default useFormValidation;
