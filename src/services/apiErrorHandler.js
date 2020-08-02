export default function apiErrorHandler(error) {
  let errorMessage;
  let validationErrors;
  // if client gets an error response, handle it
  if (error.response) {
    switch (error.response.status) {
    case 500:
      errorMessage = 'Server error, Please try again';
      break;
    case 404:
      errorMessage = 'Not found, Please try again';
      break;
    case 401:
      errorMessage = 'Not Authorized';
      break;
    default:
      errorMessage = error.response.data.error || error.response.data.message;
    }
  } else {
    //  if server is down, client won't get a response
    errorMessage = 'Possible network error, please reload the page';
  }
  return errorMessage;
}
