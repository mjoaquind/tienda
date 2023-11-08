const buyerForm = ({onSubmit, values, handleChange}) => {

    return(
        <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" value={values.name} name="name" onChange={handleChange}/>
                <label htmlFor="floatingName">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingApellido" value={values.lastName} name="lastName" onChange={handleChange}/>
                <label htmlFor="floatingApellido">Apellido</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPhone" value={values.phone} name="phone" onChange={handleChange}/>
                <label htmlFor="floatingPhone">Teléfono</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" value={values.email} name="email" onChange={handleChange}/>
                <label htmlFor="floatingEmail">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail2" value={values.email2} name="email2" onChange={handleChange}/>
                <label htmlFor="floatingEmail2">Repita el Email</label>
            </div>
            <button type="submit" className="btn btn-primary m-2">Comprar</button>
        </form>
    )
}

export default buyerForm;