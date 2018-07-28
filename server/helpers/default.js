// idea is gotten from sackoverfleow
export let getId = () => {
  let id_num = 10
	let text_output= "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < id_num; i++)
      text_output += possible.charAt(Math.floor(Math.random() * possible.length));
    return text_output;
  }
