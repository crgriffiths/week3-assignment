import React from 'react';
import CartItem from '../CartItem';
import renderer from 'react-test-renderer';

test('Cart item renders in cart when added', () => {
  const component = renderer.create (
    <CartItem 
      key={0}
      index={0}
      image='https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=2ca889535ea01f912f94ac4ddf0034e0&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80'
      title='Centrally-located Manhattan studio'
      cost={105}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});