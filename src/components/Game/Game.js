import React from 'react';
import { useState } from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState('running');

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    //Returns win condition
    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lose');
    }
  }

  return (
    <>
      {status !== 'running' && (
        <Banner answer={answer} status={status} numOfGuesses={guesses.length} />
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={status !== 'running'}
      />
    </>
  );
}

export default Game;
