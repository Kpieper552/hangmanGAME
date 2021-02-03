function displayWordSoFar(word, guesses) {
  const letterArray = word.split("");
  let output = "";
  for (let index = 0; index < letterArray.length; index++) {
    const letterInWord = letterArray[index];
    const letterGuessed = guesses.includes(letterInWord);

    if (!letterGuessed) {
      output = output + "_ ";
    }
    if (letterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  const letterArray = word.split("");

  for (let index = 0; index < letterArray.length; index++) {
    const letterInWord = letterArray[index];
    const letterGuessed = guesses.includes(letterInWord);

    if (!letterGuessed) {
      return false;
    }
  }
  return true;
}

function isGameLost(word, guesses) {
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1 ;
    }
  }
  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
