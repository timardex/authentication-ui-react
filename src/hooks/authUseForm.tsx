import { useState, useEffect, useCallback } from 'react';

const VALUE = 'value';
const ERROR = 'error';
const REQUIRED_FIELD_ERROR = 'This is required field';

/**
 * Determines a value if it's an object
 *
 * @param {object} value
 */
const isObject = (value: object): any => {
  return typeof value === 'object' && value !== null;
};

/**
 *
 * @param {string} value
 * @param {boolean} isRequired
 */
const isRequired = (value: string, isRequired: boolean): any => {
  if (!value && isRequired) return REQUIRED_FIELD_ERROR;
  return '';
};

const getPropValues = (stateSchema: any, prop: any): any => {
  return Object.keys(stateSchema).reduce((accumulator: any, curr: any) => {
    accumulator[curr] = !prop ? false : stateSchema[curr][prop];

    return accumulator;
  }, {});
};

/**
 * Custom hooks to validate your Form...
 *
 * @param {object} stateSchema model you stateSchema.
 * @param {object} stateValidatorSchema model your validation.
 * @param {function} submitFormCallback function to be execute during form submission.
 */
const useForm = (stateSchema = {}, stateValidatorSchema = {}, submitFormCallback: Function): any => {
  const [state, setStateSchema] = useState(stateSchema);

  const [values, setValues] = useState(getPropValues(state, VALUE));
  const [errors, setErrors] = useState(getPropValues(state, ERROR));
  const [dirty, setDirty] = useState(getPropValues(state, VALUE));

  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Get a local copy of stateSchema
  useEffect(() => {
    setStateSchema(stateSchema);
    setDisable(true); // Disable button in initial render.
    setInitialErrorState();
  }, []); // eslint-disable-line

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateErrorState());
    }
  }, [errors, isDirty]); // eslint-disable-line

  // Validate fields in forms
  const validateFormFields = useCallback(
    (name: any, value: any): any => {
      const validator = stateValidatorSchema as any;
      // Making sure that stateValidatorSchema name is same in
      // stateSchema
      if (!validator[name]) return;

      const field = validator[name];

      let error = '';
      error = isRequired(value, field.required);

      if (isObject(field['validator']) && error === '') {
        const fieldValidator = field['validator'];

        // Test the function callback if the value is meet the criteria
        const testFunc = fieldValidator['func'];
        if (!testFunc(value, values)) {
          error = fieldValidator['error'];
        }
      }

      return error;
    },
    [stateValidatorSchema, values]
  );

  // Set Initial Error State
  // When hooks was first rendered...
  const setInitialErrorState = useCallback((): void => {
    Object.keys(errors).map((name: any) =>
      setErrors((prevState: any) => ({
        ...prevState,
        [name]: validateFormFields(name, values[name]),
      }))
    );
  }, [errors, values, validateFormFields]);

  // Used to disable submit button if there's a value in errors
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive memory leaked
  // in every re-render in component
  const validateErrorState = useCallback((): any => Object.values(errors).some(error => error), [errors]);

  // Event handler for handling changes in input.
  const handleOnChange = useCallback(
    (event: any): void => {
      setIsDirty(true);

      const name = event.target.name;
      const value = event.target.value;

      const error = validateFormFields(name, value);

      setValues((prevState: any) => ({ ...prevState, [name]: value }));
      setErrors((prevState: any) => ({ ...prevState, [name]: error }));
      setDirty((prevState: any) => ({ ...prevState, [name]: true }));
    },
    [validateFormFields]
  );

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();

      // Making sure that there's no error in the state
      // before calling the submit callback function
      if (!validateErrorState()) {
        submitFormCallback(values);
      }
    },
    [validateErrorState, submitFormCallback, values]
  );

  return {
    handleOnChange,
    handleOnSubmit,
    values,
    errors,
    disable,
    setValues,
    setErrors,
    dirty,
  };
};

export default useForm;
