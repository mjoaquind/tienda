import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

const useProductosPorID = (id) => {
    const [item, setProducto] = useState(null);
    const { stopLoading, isLoading } = useIsLoading();

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "productos", id);
        getDoc(itemRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log("productos por id");
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
    }, [id]);

    return {
        item,
        isLoading,
    };
}

export default useProductosPorID;