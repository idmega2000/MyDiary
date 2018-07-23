let InputErrors = (text_input) => {
    if((!text_input|| text_input === "" || text_input.trim()=== 0) ){
        throw new Error("Please fill all field");
    }
    else if (typeof text_input !=="string"){
        throw new Error("Something went wrong");
    }
    else if(text_input.indexOf(' ') >= 0){
        throw new Error('White spaces are not allowed');
    }
}
