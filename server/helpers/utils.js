

// idea is gotten from sackoverfleow by csharptest.net

export const getrandomString = (outputLength) => {
	let id_num = outputLength;
    let text_output = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < id_num; i++) {
      text_output += possible.charAt(Math.floor(Math.random() * possible.length));
    } 
    return text_output;
};


export const getFileName = (originalName) => {
    let randomString = getrandomString(50);
    let filenameOutput = (new Date().toISOString() + randomString + originalName);
    return filenameOutput.replace(/:/g, '');
}

