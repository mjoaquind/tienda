import { and, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import useIsLoading from "./useLoading";

const useProductosPorTipo = (tipo) => {
    const [items, setItems] = useState([]);
    const { stopLoading, isLoading } = useIsLoading();

    useEffect(() => {
        const db = getFirestore();
    
        const q = query(
            collection(db, "productos"),
            and(where("stock", ">", 0), where("tipo", "==", tipo))
        );
    
        getDocs(q)
            .then((snapshot) => {
                if (!snapshot.empty) {
                    setItems(
                        snapshot.docs.map((doc) => {
                            return {
                            id: doc.id,
                            ...doc.data(),
                            };
                        })
                    );
                }
            })
            .finally(() => [stopLoading()]);
    }, [tipo, stopLoading]);

    return { items, isLoading };
}

export default useProductosPorTipo;