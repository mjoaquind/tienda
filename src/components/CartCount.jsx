const CartCount = ({count = 0}) => {
    return (
        <div className="position-absolute rounded-circle px-2" style={{ top: 0, textAlign: "center" }}>
            <span style={{ fontSize: "18px", color: "red", fontWeight: "bold"}}>{count}</span>
        </div>
    )
}

export default CartCount;