import React from 'react'
import { Link } from 'react-router-dom'
const FilterBar = ({ mod }) => {

  if (mod === "HomeFilter") {
    return (
      <div className="flex-container filter-bar">
        <div className="row">
          <div className="col-1">
            <Link to='/'>
              <h6 className="nav-link" >Todo <span className="sr-only">(current)</span></h6>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex-container filter-bar">
        <div className="row">
          <div className="col-1">
            <Link to='/'>
              <h6 className="nav-link" >Todo <span className="sr-only">(current)</span></h6>
            </Link>
          </div>
          <div className="col-1">
            <Link to='/filter/Malta'>
              <h6 className="nav-link"  >Maltas</h6>
            </Link>
          </div>
          <div className="col-1">
            <Link to='/filter/Lupulo'>
              <h6 className="nav-link" >Lupulos</h6>
            </Link>
          </div>
          <div className="col-1">
            <Link to='/filter/Levadura'>
              <h6 className="nav-link" >Levaduras</h6>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default FilterBar







