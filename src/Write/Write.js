import TextareaAutosize from 'react-textarea-autosize';
import { Container, Col, Row, setConfiguration, useScreenClass } from 'react-grid-system';
import { useState } from 'react';
import { createLetter } from '../api';
import { useNavigation } from '../hooks/useNavigation';

setConfiguration({ gutterWidth: 80 });

const textAreaSizes = {
  xs: 5,
  sm: 8,
  md: 10,
  lg: 10,
  xl: 18,
  xxl: 25,
};

export const Write = () => {
  const screenClass = useScreenClass();
  const [letter, setLetter] = useState({});
  const { navigate } = useNavigation();

  const onChange = (e) => setLetter((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    createLetter(letter).then(({ slug }) => navigate('/' + slug));
  };

  return (
    <Container component='main' fluid>
      <Row>
        <Col xs={12} lg={4} className='header-col'>
          <h1 className='display'>Letters</h1>
          <p className='paragraph'>Would you like to write someone a letter?</p>
        </Col>
        <Col xs={12} lg={8}>
          <form onSubmit={onSubmit} className='inputs'>
            <label htmlFor='to'>To</label>
            <input
              id='to'
              onChange={onChange}
              name='to'
              placeholder='Who are you sending this to?'
            />
            <label htmlFor='from'>From</label>
            <input id='from' onChange={onChange} name='from' placeholder='Who are you?' />
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              onChange={onChange}
              name='title'
              placeholder='Give your letter a title.'
            />
            <label htmlFor='message'>Your message</label>
            <TextareaAutosize
              id='message'
              onChange={onChange}
              rows={4}
              maxRows={textAreaSizes[screenClass] ?? 15}
              name='message'
            />
            <input type='submit' value='Seal' />
          </form>
          <p>letter length: {letter.message?.length ?? 0}</p>
        </Col>
      </Row>
    </Container>
  );
};
