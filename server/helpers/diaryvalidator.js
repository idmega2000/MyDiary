

export const dairyInput = (text_input) => {

    let title = text_input.diary_title;
    let content = text_input.diary_content;
    let image = text_input.diary_image;
  
    if ((!Object.keys(text_input).length) || (!text_input) || (typeof text_input !== 'object')) {
      return 'Please fill all field';
    }
    else if(title === '' || content === ''){
      return 'Please fill all field';
    }
    else if(typeof title !== 'string' || typeof content !== 'string'){
      return 'invalid input';
    } 
    else if(title.trim().length === 0 || content.trim().length === 0){
        return 'Please fill all field';
      }
    else if (title.length < 3){
      return 'Title should be 3 character and above';
    }
    else if (content.length < 6){
      return 'Content must be 6 character and above';
    }

}

export const singleGetValidator = (input) => {
   let result = Number(input);
    if(result<1){
        return 'Invalid Request';
    }
    else if(!Number.isInteger(result)){
        return 'Invalid Request';
    }
}
