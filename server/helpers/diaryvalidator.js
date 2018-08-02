
export const dairyInput = (text_input) => {

    for (let i = 0; i < text_input.length; i++) {
        if ((!text_input[i]) || (text_input[i] === '')) {
          return 'Please fill all field';
        }
        else if(text_input[i].length < 5){
            return 'minimum character in each field is 5';
        }
      }

}
