import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useParams } from 'react-router';
import { readLetter, touchLetter } from '../api';
import { Message } from './Message';

export const Read = () => {
  const { slug } = useParams();
  const [touch, setTouch] = useState();
  const [letter, setLetter] = useState();

  useEffect(() => {
    const fetchStuff = async () => {
      const touchedLetter = await touchLetter(slug);
      if (touchedLetter) {
        setTouch(touchedLetter);
      } else {
        setTouch(null);
      }
    };
    fetchStuff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const read = async () => {
    const ltr = await readLetter(touch.slug);
    setLetter(ltr);
  };

  console.log(slug);
  return (
    <Container component='main' fluid>
      <Row>
        <Col xs={12} lg={5} className='letter-header'>
          <h1 className='letter-title'>{touch?.title ?? '...'}</h1>
          <div>
            <pre className='letter-paragraph'>
              From:{'      '}
              {touch?.from ?? '...'}
            </pre>
            <pre className='letter-paragraph'>
              To:{'        '}
              {touch?.to ?? '...'}
            </pre>
            <pre className='letter-paragraph'>
              Sealed on: {touch?.createdAt ? new Date(touch.createdAt).toLocaleString() : '...'}
            </pre>
          </div>
        </Col>
        <Col xs={12} lg={7}>
          <article className='letter-message'>
            <div className='scrollbar-hider'>
              {<Message letter={letter ?? touch ?? null} read={read} />}
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
};
