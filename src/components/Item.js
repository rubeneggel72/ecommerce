import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import ItemWish from '../components/ItemWish'
const Item = ({ item }) => {

  return (
    <ProductWrapper  >
      <div className="card">
        <ItemWish item={item} />
        <div className="img-container p-5">
          <Link to={`/detail/${item.id}`}>

            <img src={`https://github.com/rubeneggel72/ecommerce/blob/main/src/img/${item.img}.jpg?raw=true`} alt={item.name} className="card-img-top" />
          </Link>
          {(item.inCart === true) ? (
            <Link to={`/cart`}>
              <button className="card-btn" >
                <p className="text-capitalize mb-0" disabled>
                  {""}
                YA FUE AGREGADO A <i className="fa fa-shopping-cart " />
                </p>
              </button>
            </Link>
          ) : (
              <>
              </>
            )}
        </div>
        <div id="card-footer" className="card-footer d-flex justify-content-between">

          <span className="align-self-center mb-0">
            {item.name}</span>
        </div>
        <div id="card-footer" className="card-footer d-flex justify-content-between">
          <h6 className="text-bright font-italic mb-0">
            <span >$</span>
            {item.price}

            <span > x </span>
            {item.unit}
          </h6>
        </div>
      </div>
    </ProductWrapper>
  );
}
export default Item

const ProductWrapper = styled.div`
.card{
  border-color: transparent;
  transition:all 1s linear;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;

}
&hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.02);
  }
  .card-footer{
    background: rgba(247,247,247);

  }
}
.img-container{
  position: relative;
  overflow: hidden;

}
.card-img-top{
  transition: all 1s linear;

}
.img-container:hover .card-img-top{
  transform: scale(1.5);

}
.card-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--lightBlue);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius: 0.8rem 0 0 0;
  transform: translate(100%,100%);
  transition: all 1s linear;
}
.img-container:hover .card-btn{
  transform: translate(0%,0%);
  
}
.card-btn: hover{
  color: var(--mainBlue);
  cursor:pointer;
 }
`;
