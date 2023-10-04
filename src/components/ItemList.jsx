const ItemList = ({ productos }) => {
    return (
        <div className="row">
        { productos.map((producto) => (
            <div key={producto.id} className="col-md-3">
                <div  className="card">
                    <img src={producto.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{producto.tipo} {producto.marca} {producto.nombre}</h5>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        {/*<link to="#" className="btn btn-primary">Go somewhere</link>*/}
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default ItemList;