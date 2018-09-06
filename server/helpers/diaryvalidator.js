
export const dairyInput = (req, res, next) => {


    let text_input = req.body; 
    let title = text_input.diary_title;
    let content = text_input.diary_content;
    let imageInfo = req.files[0];

    if(imageInfo){
      if (imageInfo.fieldname !== 'diaryImage'){
        return res.status(400).json({ error: 'Invalid Image input type'});
      }
      if(imageInfo.mimetype === 'image/png' || imageInfo.mimetype ==='image/jpeg' || imageInfo.mimetype ==='image/jpg'){
      }else{
        return res.status(400).json({ error: 'Invalid Image type'});
      }
      if (imageInfo.fileSize > (1024 * 1024 * 3)){
        return res.status(400).json({ error: 'File size should not be more than 1mb'});
      }
    }
 
    if(!title || !content){
      return res.status(400).json({ error: 'Please fill all field'});
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
return next()
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
