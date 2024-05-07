import { useEffect, useState } from "react"
import axios from "axios"
import { DataItems } from "../types/DataItems";

export const useGetData = () => {
    
    const [items, setItems] = useState<DataItems[]>([])

    const getData = async () => (await axios.get("public/items.json")).data;

    useEffect(() => {
        getData().then( data => setItems( data ) )
    }, [])
    
    return { items }
}