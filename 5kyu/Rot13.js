function rot13(message){
  const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  const messageLetters = message.split("");
  let res = "";
  for (let letter of messageLetters) {
    if (alphabet.indexOf(letter) >= 0) {
      let index = alphabet.indexOf(letter) + 26;
      if (index >= alphabet.length) {
        index = index - alphabet.length;
      }
      res += alphabet[index];
    } else {
      res += letter;
    }
  }
  return res;
}
