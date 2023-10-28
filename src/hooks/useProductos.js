import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useProductos() {
    const [items, setProductos] = useState([]);
    const { stopLoading, isLoading } = useIsLoading();

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const productosCollection = collection(db, "productos");

            

            try {
                const snapshot = await getDocs(productosCollection);
                if (!snapshot.empty) {
                    console.log("pasa por acá");
                    const products = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setProductos(products);
                }
            } catch (error) {
                // Manejar el error apropiadamente, por ejemplo:
                console.error("Error al obtener productos:", error);
            } finally {
                stopLoading();
            }
        };

        fetchData();
    }, [stopLoading]); // Agregar dependencias necesarias para volver a cargar los datos

    return { items, isLoading };
}