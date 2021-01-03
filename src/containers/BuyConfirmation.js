import React, { useState } from "react";
import useCartContext from "../context/UseCartContext"
import { getFirestore } from '../firebase/index'
import { Link } from 'react-router-dom';

const BuyConfirm = () => {
  const { cart, totalPrice, delivery, CleanCart } = useCartContext()
  var items = []
  cart.map((cart, idx) => {
    items.push({ id: cart.id, name: cart.name, qty: cart.qty, price: cart.price })
    return <div key={idx}></div>
  })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const db = getFirestore();
    db.collection("Ventas")
      .add({ buyer: { name: name, email: email, phone: phone }, totalPrice: totalPrice, items: items })
      .then(({ id }) => {
        setId(id)
        setLoader(false);
        CleanCart()
        // alert("Your message has been submitted👍 - Id:"+id);
      })
      .catch((error) => {
        alert("fallo esto:" + error.message);
        setLoader(false);
      });
    setName("");
    setEmail("");
    setEmailConfirmation("");
    setPhone("");
  };
  if (id !== "") {
    return (

      <div className="container detailContainer">
        <div className="row">
          <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
            <h4>
              Orden de compra realizada!!
            </h4>
            <br />
            <h5>
              ID compra: {id}
            </h5>
            <Link to='/'>
              <button
                type="submit" className="primary-btn offset-1"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
              >   Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row " >
            <div className="col-10">
              <h2>Orden de compra</h2>
              <h4 className="cart-price">Pago total: $ {totalPrice + delivery.price}</h4>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2"><label >Nombre</label></div>
            <div className="col-7 col-sm-5 col-md-6 col-lg-5 col-xl-4">
              <input type="text" className="form-control" id="given-name" aria-describedby="nameHelp" placeholder="Nombre y Apellido" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2"><label>Email </label></div>
            <div className="col-7 col-sm-5 col-md-6 col-lg-5 col-xl-4">
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2">
              <label>Confirmar Email  </label></div>
            <div className="col-7 col-sm-5 col-md-6 col-lg-5 col-xl-4">
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 error-text">{email.length > 0 && emailConfirmation.length > 0 && phone.length && email !== emailConfirmation ? (<spam> Las direcciones de email no coinciden</spam>) : (<span></span>)}</div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2">
              <label >Teléfono</label></div>
            <div className="col-7 col-sm-5 col-md-6 col-lg-5 col-xl-4">
              <input type="text" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="N° de Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div></div>
          <br></br>
          <div className="row">
            <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2"></div>
            <div className="col-7 col-sm-5 col-md-6 col-lg-5 col-xl-4">
              {name.length > 5 && email.length > 5 && emailConfirmation.length > 5 && phone.length && email === emailConfirmation ?
                (<button type="submit" className="primary-btn offset-1"> Submit </button>) :
                (<button type="submit" className="primary-btn-disabled offset-1 " disabled > Submit </button>
                )
              }
            </div></div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </form>

    )
  }
}

export default BuyConfirm


