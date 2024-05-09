import { useEffect, useState } from "react"
import axios from "axios"
import { DataItems } from "../types/DataItems";
import { controlLabels } from "../helpers/controlLabels";


const keyItemData = "item-data"

export const useControlData = () => {
    const [items, setItems] = useState<DataItems[]>([])

    // FUNCIONES
    // Funcion para obtener los datos de la carpeta public
    const getData: ()=> Promise<DataItems[]> = async () => (await axios.get("public/items.json")).data;
    
    // Funcion para guardar en el LocalStorage
    const saveItem = () => { if ( items.length !== 0 ) window.localStorage.setItem(keyItemData, JSON.stringify(items)) }


    useEffect(() => { 
        // Intenta obtener los datos del LocalStorage
        const existDataItem: ( DataItems[] | null ) = JSON.parse( window.localStorage.getItem( keyItemData ) || "null" );
    
        // Verifica si existe los datos en el LocalStorage, si existe se regresa los datos del LocalStorage
        if ( existDataItem !== null  ) setItems( existDataItem );

        // Si no existe se obtendra los datos de la carpeta public y se guarda en los items
        if ( existDataItem === null || existDataItem.length === 0 ) getData().then( data => setItems( data.map( item => ({...item, labels: []})) ) );

        // Guarda los datos de state items
        saveItem();
    }, [])
    
    useEffect(() => { saveItem() }, [items])


    // CONTROLAR LABELS
    const labelControl = controlLabels( items, setItems )

    
    return {items, labelControl};
}