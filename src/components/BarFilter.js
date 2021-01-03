import React from 'react'
import { Link } from 'react-router-dom'
const BarFilter = ({ mod }) => {
  if (mod === "HomeFilter") {
    return (
      <div className="container filter-bar main-nav nav navbar-nav">
        <div className="row">
          <div className="col-2">
            <Link to='/'>
              <h6 id="text-filert-bar" className="nav-link"  >Todos</h6>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container filter-bar main-nav nav navbar-nav">
        <div className="row">

          <div className="col-2">
            <Link to='/filter/Malta'>
              <h6 id="text-filert-bar" className="nav-link"  >Maltas</h6>
            </Link>
          </div>
          <div className="col-2">
            <Link to='/filter/Lupulo'>
              <h6 id="text-filert-bar" className="nav-link" >Lupulos</h6>
            </Link>
          </div>
          <div className="col-2">
            <Link to='/filter/Levadura'>
              <h6 id="text-filert-bar" className="nav-link" >Levaduras</h6>
            </Link>
          </div>
          <div className="col-2">
            <Link to='/filter/Extracto'>
              <h6 id="text-filert-bar" className="nav-link" >Extractos</h6>
            </Link>
          </div>
          <div className="col-2">
            <Link to='/filter/Aditivo'>
              <h6 id="text-filert-bar" className="nav-link" >Aditivos</h6>
            </Link>
          </div>
          <div className="col-2">
            <Link to='/filter/Kit'>
              <h6 id="text-filert-bar" className="nav-link" >Kits</h6>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default BarFilter







