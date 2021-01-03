import React, { useState } from "react";
import useCartContext from "../context/UseCartContext"
import { getFirestore } from '../firebase/index'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const BuyConfirm = () => {
    const {cart,totalPrice,delivery,CleanCart } = useCartContext()
    var items=[]
    cart.map((cart,idx) => {
       items.push({id:cart.id,name:cart.name,qty:cart.qty,price:cart.price})
          return <div key={idx}></div> })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
const [loader, setLoader] = useState(false);
const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const db = getFirestore();
        db.collection("Ventas")
      .add({buyer:{name: name, email: email, phone:phone}, totalPrice:totalPrice,items:items})
      .then(({id}) => {
          setId(id)
        setLoader(false);
        CleanCart()
        // alert("Your message has been submitted👍 - Id:"+id);
      })
      .catch((error) => {
        alert("fallo esto:"+error.message);
        setLoader(false);
      });
    setName("");
    setEmail("");
    setPhone("");
  };

  if (id!=="") {
      return (
        <ModalContainer>
        <div className="container">
            <div className="row">
            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
        <h4>
        Orden de compra realizada!!!
        </h4>
        <br/>
        <h5>
        ID compra: {id}
        </h5>
        <Link to = '/'>
        <button
        type="submit" className="btn btn-primary"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
       
        >   Volver
        </button>
        </Link>
     </div>
     </div>
     </div>
     </ModalContainer>
      )
  }
  else{
  return (
    <ModalContainer>
    <div className="container">
        <div className="row">
            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
      <form className="form-group" onSubmit={handleSubmit}>
      <h2>Orden de compra</h2>
      <h4>Pago total: $ {totalPrice+delivery.price}</h4>
      <label >Nombre</label>
    <input type="text" className="form-control" id="given-name" aria-describedby="nameHelp" placeholder="Nombre y Apellido" value={name} onChange={(e) => setName(e.target.value)}/>
    <label>Email </label>
    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <label>Email (Confirmación)</label>
    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <label >Teléfono</label>
    <input type="text" className="form-control" id="exampleInputPhone"  aria-describedby="phoneHelp" placeholder="N° de Teléfono"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
    <br></br>
      <button
        type="submit" className="btn btn-primary"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  </div>
    </div>
    </div>
    </ModalContainer>
  )
  }
}

export default BuyConfirm

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    
    }
    
    
    
    `;
