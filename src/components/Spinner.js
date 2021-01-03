import React from 'react'

const Spinner = () => {
  return (
    <div className="container homeContainer ">
      <div className="row">
        <div className="col-2 col-sm-3 col-md-3 col-lg-2 col-xl-2 offset-3" id="Spiner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Cargando...</span>
            <br />  <br />  <br />  <br />  <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spinner


