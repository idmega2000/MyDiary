

export const dairyInput = (req, res, next) => {
    let text_input = req.body; 
    let title = text_input.diary_title;
    let content = text_input.diary_content;
    let image = text_input.diary_image;
  


    if(!title || !content){
      return res.status(400).json({ error: 'Please fill all field'});
    }
    else if(typeof title !== 'string' || typeof content !== 'string'){
      return res.status(400).json({ error: 'invalid input'});
    } 
    else if(title.trim().length === 0 || content.trim().length === 0){
      return res.status(400).json({ error: 'Please fill all field'});
      }
    else if (title.length < 3){
      return res.status(400).json({ error: 'Title should be 3 character and above'});
    }
    else if (content.length < 6){
      return res.status(400).json({ error: 'Content must be 6 character and above'});
    }
next();
}

export const singleGetValidator = (req, res, next) => {
  let input = req.params.id;
   let result = Number(input);
    if(result<1){
      return res.status(400).json({ error: 'Invalid Request'});
    }
    else if(!Number.isInteger(result)){
      return res.status(400).json({ error: 'Invalid Request'});
    }
    next();
}
