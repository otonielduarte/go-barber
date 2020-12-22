import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const arrayErrors: Errors = {};

  err.inner.forEach(innerValue => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    arrayErrors[innerValue.path!] = innerValue.message;
  });

  return arrayErrors;
}
