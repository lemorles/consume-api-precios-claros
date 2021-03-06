import React from "react";

const Product = props => {
  const {
    id,
    nombre,
    marca,
    precio_unitario_bulto_max_con_iva
  } = props.product;

  return (
    <div className="card my-2 mx-2 max-with">
      {
        <img
          src={`https://imagenes.preciosclaros.gob.ar/productos/${id}.jpg`}
          className="card-img-top"
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://mayoristas.preciosclaros.gob.ar/img/no-image.png";
          }}
          alt={`SKU-${id}`}
        />
      }

      <div className="card-body text-center">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{marca}</p>
        <h6 className="card-title">
          Costo: {`$${precio_unitario_bulto_max_con_iva.toFixed(2)}`}
        </h6>
        <h5 className="card-title text-primary">
          Venta: {`$${(precio_unitario_bulto_max_con_iva * 1.7).toFixed(2)}`}
        </h5>
      </div>
    </div>
  );
};

export default Product;

/*

<div class="card" style="width: 18rem;">
          <img
          src={`https://imagenes.preciosclaros.gob.ar/productos/${id}.jpg`}
          className="card-img-top"
          alt={id}
          width="150"
        />
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">{marca}</p>
    <p className="card-text">Costo: ${precio_unitario_bulto_max_con_iva}</p>
    <p className="card-text">Venta: {`$${(precio_unitario_bulto_max_con_iva * 1.7).toFixed(2)}`}</p>
  </div>
</div>




      <div className="col-3">
        <img
          src={`https://imagenes.preciosclaros.gob.ar/productos/${id}.jpg`}
          alt={id}
          width="150"
        />
      </div>
      <div className="col-9">
        <p>{nombre}</p>
        <p>{marca}</p>
        <p>Costo: ${precio_unitario_bulto_max_con_iva}</p>
        <p>
          Venta: {`$${(precio_unitario_bulto_max_con_iva * 1.7).toFixed(2)}`}
        </p>
      </div>

*/
