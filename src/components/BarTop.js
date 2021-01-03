import React from 'react'
import { Link } from 'react-router-dom'
const BarTop = () => {
  return (
    <div id="top-bar" className="container-flex top-bar header-links pull-right">
      <div className="row">
        <div className="col-5 offset 1">
          <Link to='/'>
            <h6 id="text-top-bar" > <i className="fa fa-envelope-o icon-top-bar" /> info@beeralchemy.com.ar <span className="sr-only">(current)</span></h6>
          </Link>
        </div>
        <div className="col-3">
          <Link to='/'>
            <h6 id="text-top-bar"  ><i className="fa fa-phone icon-top-bar" />  3492-520661</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default BarTop







