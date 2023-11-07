const CartTable = ({cart}) => {
    
    return(
        <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Precio Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.items.map(({item, quantity}) => (
                    <tr key={item.id}>
                        <td>{quantity}</td>
                        <td>{item.tipo}</td>
                        <td>{item.marca}</td>
                        <td>{item.nombre}</td>
                        <td>{item.precio}</td>
                        <td>{item.precio * quantity}</td>
                    </tr>
                ))}
                <tr>
                    <td colSpan={5} className="text-end"><b>Total</b></td>
                    <td>{cart.total}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default CartTable;