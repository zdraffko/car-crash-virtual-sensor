import { useState, useEffect } from "react";

const useFormValidation = (initialFormState, validateForm) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(validationErrors).length === 0) {
        console.log(formValues);
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

  const handleBlur = () => {
    setValidationErrors(validateForm(formValues));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setValidationErrors(validateForm(formValues));
  };

  return { formValues, validationErrors, isSubmitting, handleValueChange, handleBlur, handleFormSubmit };
};

export default useFormValidation;
