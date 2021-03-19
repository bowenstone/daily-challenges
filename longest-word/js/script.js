function LongestWord(sen) {
  // code goes here
  longWord = '';
  
  //noPuncuations = sen.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,"");

  let noPunc = sen.replace(/[^a-zA-Z ]/g, ' ');
  strarray = noPunc.split(" ");
  console.log (strarray);
  for (let word of strarray)  {
    if (word.length > longWord.length)  {
      longWord = word;
    }
  }
  sen = longWord;
  console.log(sen);
  return sen;
}

LongestWord("fun&!! time");
LongestWord("I love dogs");