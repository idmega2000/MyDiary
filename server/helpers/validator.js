export const InputErrors = (text_input) => {
  if ((!Object.keys(text_input).length) || (!text_input) || (typeof text_input !== 'object')) {
    return 'Please fill all field';
  }

  for (let i = 0; i < text_input.length; i++) {
    if ((!text_input[i]) || (text_input[i] === '')) {
      return 'Please fill all field';
    }
  }
};


// There should be a test for the incomming id
// for get request and delete request.
