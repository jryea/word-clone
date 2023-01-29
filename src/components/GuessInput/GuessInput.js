import React from 'react';
import { useState } from 'react';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [currentGuess, setCurrentGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (currentGuess.length !== 5) {
      window.alert('Please enter 5 characters');
      return;
    }
    handleSubmitGuess(currentGuess);
    setCurrentGuess('');
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => handleSubmit(event)}
    >
      <label className='guess-input' htmlFor='guess-input'>
        Enter guess:
      </label>
      <input
        required
        minLength={5}
        maxLength={5}
        disabled={disabled}
        id='guess-input'
        type='text'
        value={currentGuess}
        onChange={(event) => setCurrentGuess(event.target.value.toUpperCase())}
      ></input>
      <p>{currentGuess}</p>
    </form>
  );
}

export default GuessInput;
