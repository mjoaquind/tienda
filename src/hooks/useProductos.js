import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useProductos() {
    const [productos, setProductos] = useState([]);
    const { stopLoading, isLoading } = useIsLoading();

    useEffect(() => {
        const db = getFirestore();

        const productosColection = collection(db, "productos");
        getDocs(productosColection)
        .then((snapshot) => {
            if (!snapshot.empty) {
                setProductos(
                snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
                })
            );
            }
        })
        .finally(() => {
            stopLoading();
        });
    }, [stopLoading]);

    return { productos, isLoading };
}