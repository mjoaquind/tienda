import { useContext } from "react";
import CartContext from "../context/cart.context";
import useForm from "../hooks/useForm";
import CartTable from '../components/CartTable';
import BuyerForm from "../components/BuyerForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { cart } = useContext(CartContext);

    const [values, handleChange] = useForm({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        email2: "",
    });

    if (cart.items.length === 0) return <div>El carrito está vacío</div>;

    const onSubmit = (e) => {
        e.preventDefault();
    
        for (const key in values) {
            if (values[key] === "") {
                toast.error("Todos los campos son obligatorios");
                return;
            }
        }
    
        if (values.email !== values.email2) {
            toast.error("Los emails no coinciden");
            return;
        }
    
        sendOrder();
    };
    
    const sendOrder = () => {
        const db = getFirestore();
    
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, {
            ...cart,
            buyer: {
                name: values.name,
                lastName: values.lastName,
                phone: values.phone,
                email: values.email,
            },
            date: new Date(),
        }).then(({ id }) => {
            toast.success(`Orden enviada. El id de la orden es: ${id}`);
        });
    };
    
    return (
        <>
            <ToastContainer />
            <h2>Resumen del Carrito</h2>
            <CartTable cart={cart} />
            <h2>Formulario de Compra</h2>
            <BuyerForm
                onSubmit={onSubmit}
                values={values}
                handleChange={handleChange}
            />
        </>
    );
}

export default Checkout;