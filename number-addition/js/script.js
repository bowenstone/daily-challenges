console.log('and again...');
/*
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

Examples

Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
*/

function LongestWord(sen) {
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


/*
Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

Examples

Input: "75Number9"
Output: 84

Input: "10 2One Number*1*"
Output: 13
*/

function NumberSearch(str)  {
  let num = 0;
  let total = 0;

  for (i=0; i<str.length; ++i) {
    if (!isNaN(str[i]) && (str[i] != ' '))  {
      num = str[i];
      while ((i != str.length) && !isNaN(str[i+1]) && (str[i+1] != ' '))  {
        num = num + str[++i];
      } 
      total += parseInt(num);  
    }
  }
  console.log('sum of the numbers in the string is ' + total)   
  return total;
}

NumberSearch("75Number9");
NumberSearch("10 2One Number*1*");

