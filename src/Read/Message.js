import React from 'react';
import { useNavigation } from '../hooks/useNavigation';

export const Message = ({ letter, read }) => {
  const isRead = letter?.readOn ? new Date(letter.readOn) : false;
  const { makeNavigation } = useNavigation();

  const BackButton = () => (
    <button onClick={makeNavigation('/')} className='letter-read-button'>
      Go Back
    </button>
  );

  if (!letter) {
    return (
      <>
        <p>[nothing here...]</p>
        <BackButton />
      </>
    );
  }

  if (isRead) {
    return (
      <>
        <p>[this message has faded]</p>
        <BackButton />
      </>
    );
  }

  if (letter && !isRead && !letter.message) {
    return (
      <>
        <p>This letter is sealed. By opening and reading it's contents the message will fade.</p>
        <p>A letter can only be read once.</p>
        <p>
          This action is not reversible and by clicking on the "read" button you state that you are
          aware of these terms.
        </p>
        <button onClick={read} className='letter-read-button'>
          Read
        </button>
      </>
    );
  }

  if (letter && !isRead && letter.message) {
    return (
      <>
        {letter.message?.split('\n').map((line, i) => (
          <p key={'msg-line-' + i}>{line}</p>
        ))}
        <BackButton />
      </>
    );
  }
};
