/* (name) => {
    `Bonjour, ${name} ! Comment vas-tu ?`;
  } */
function salutation(name) {
    return "Bonjour, " + name + " ! Comment vas-tu ?";
}

/*
function getStringLength(string){
  let stringLength;
  if(string.length === 1){
    stringLength = 'La chaîne contient qu'un seul caractère';
  } else {
    stringLength = `La chaîne contient ${string.length} caractères`;
  }
  return stringLength;
}
*/
(string) => {
    let stringLength;
    if(string.length === 1){
        stringLength = 'La chaîne contient qu\'un seul caractère';
    }else {
        stringLength = 'La chaîne contient' + string.length + 'caractères';
    }
}