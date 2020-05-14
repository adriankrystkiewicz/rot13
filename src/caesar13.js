export const caesar13 = (sentence) => {
  const minSmallCharCode = 97; //a
  const maxSmallCharCode = 122; //z
  const minBigCharCode = 65; //A
  const maxBigCharCode = 90; //Z
  let codedSentence = "";

  for (let charIndex = 0; charIndex < sentence.length; charIndex++) {
    const charCode = sentence.charCodeAt(charIndex);

    //Obsługa małych liter
    if (charCode >= minSmallCharCode && charCode <= maxSmallCharCode) {
      if (charCode + 13 > maxSmallCharCode)
        codedSentence += String.fromCharCode(charCode - 13);
      else codedSentence += String.fromCharCode(charCode + 13);
    }
    //Obsługa wielkich liter
    else if (charCode >= minBigCharCode && charCode <= maxBigCharCode) {
      if (charCode + 13 > maxBigCharCode)
        codedSentence += String.fromCharCode(charCode - 13);
      else codedSentence += String.fromCharCode(charCode + 13);
    } 
    //Jeżeli inny znak to brak modyfikacji
    else {
      codedSentence += sentence[charIndex];
    }
  }

  return codedSentence;
};
