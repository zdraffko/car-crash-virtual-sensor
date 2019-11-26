import { useState, useEffect, useCallback } from "react";

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

  const handleValueChange = useCallback((event) => setFormValues({
    ...formValues,
    [event.target.name]: event.target.value
  }), [formValues]);

  const handleBlur = useCallback((event) => {
    const errors = validateForm(formValues);
    let errorMessage = "";
    for (const error of Object.keys(errors)) {
      if (event.target.name === error) {
        errorMessage = errors[error];
      }
    }

    setValidationErrors({ ...validationErrors, [event.target.name]: errorMessage });
  }, [formValues, validateForm, validationErrors]);

  const handleFormSubmit = useCallback((event, history) => {
    event.preventDefault();
    setIsSubmitting(true);
    setValidationErrors(validateForm(formValues));
    history.push("/results");
  }, [formValues, validateForm]);

  const handleFormReset = useCallback(() => {
    setFormValues(initialFormState);
  }, [initialFormState]);

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
