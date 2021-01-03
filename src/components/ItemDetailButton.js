import React from 'react';
const ItemDetailButton = (inCart) => {
  if (inCart == true) {
    return (
      <ButtonContainer onClick={() => AddCart(counter, product)}>
        add to cart
      </ButtonContainer>
    )
  }
  else {
    return (
      <Link to='/cart'>
        <ButtonContainer>
          inCart
        </ButtonContainer>
      </Link>
    )
  }
}
export default ItemDetailButton