// idea is gotten from sackoverfleow
export const getId = () => {
  const id_num = 10;
  let text_output = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < id_num; i++) {
    text_output += possible.charAt(Math.floor(Math.random() * possible.length));
  } 
  return text_output;
};
