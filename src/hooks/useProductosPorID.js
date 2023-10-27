import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

export default function useProductosPorID(id) {
    const [producto, setProducto] = useState(null);
    const { stopLoading, isLoading } = useIsLoading();

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "productos", id);
        getDoc(itemRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                setProducto({
                id: snapshot.id,
                ...snapshot.data(),
            });
            } else {
            console.log("No existe el producto");
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            stopLoading();
        });
    }, [id, stopLoading]);

    return {
        producto,
        isLoading,
    };
}