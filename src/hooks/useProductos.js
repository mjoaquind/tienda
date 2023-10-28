import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

const useProductos = () => {
    const [items, setProductos] = useState([]);
    const { stopLoading, isLoading } = useIsLoading();

    useEffect(() => {
        const db = getFirestore();
    
        const itemsColecction = collection(db, "productos");
        getDocs(itemsColecction)
            .then((snapshot) => {
                if (!snapshot.empty) {
                    setProductos(
                    snapshot.docs.map((doc) => {
                        console.log("productos");
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
    }, []); // quito stopLoading porque hacía que se ejecute cada vez que se renderizaba el componente

    return { items, isLoading };
}

export default useProductos;