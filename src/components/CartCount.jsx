const CartCount = ({count = 0}) => {
    return (
        <div className="position-absolute rounded-circle px-2" style={{ top: -5, textAlign: "center" }}>
            <span style={{ fontSize: "15px", color: "red", fontWeight: "bold"}}>{count}</span>
        </div>
    )
}

export default CartCount;