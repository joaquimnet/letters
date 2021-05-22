import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useParams } from 'react-router';

export const Read = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <Container component='main' fluid>
      <Row>
        <Col xs={12} lg={5} className='letter-header'>
          <h1 className='letter-title'>Title of the letter etc</h1>
          <div>
            <pre className='letter-paragraph'>From:{'      '}Kaffe</pre>
            <pre className='letter-paragraph'>To:{'        '}Blu</pre>
            <pre className='letter-paragraph'>Sealed on: {new Date().toLocaleString()}</pre>
          </div>
        </Col>
        <Col xs={12} lg={7}>
          <article className='letter-message'>
            <div className='scrollbar-hider'>
              {`Jelly caramels pie croissant tart. Muffin topping jelly beans sweet. Jujubes powder jelly chupa chups pastry.

Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.
Dragée wafer lollipop gingerbread gummi bears. Candy sugar plum pudding jelly dessert. Cookie topping jelly-o sweet carrot cake caramels fruitcake dragée. Bear claw cake cake apple pie macaroon sesame snaps chocolate.

Chocolate cake cookie jelly cookie. Sesame snaps cheesecake soufflé cake chocolate jelly-o. Lemon drops biscuit marshmallow ice cream pie ice cream dessert marshmallow tart.

Cheesecake macaroon icing. Gingerbread cheesecake sesame snaps gingerbread sweet liquorice jelly beans pie powder. Tiramisu gummi bears icing carrot cake gummies brownie cake.

Cheesecake dragée halvah. Donut oat cake chocolate dragée lollipop danish gummies cheesecake. Croissant caramels halvah jelly tootsie roll. Marzipan chocolate cake tootsie roll croissant gummies.`
                .split('\n')
                .map((line, i) => (
                  <p key={'msg-line-' + i}>{line}</p>
                ))}
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
};
