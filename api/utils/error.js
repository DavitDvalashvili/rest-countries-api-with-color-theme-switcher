// Function to create an error object with a specified status code and message
const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

export default errorHandler;
