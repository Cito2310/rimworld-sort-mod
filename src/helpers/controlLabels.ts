import { DataItems } from "../types/DataItems";

import { v4 as uuidv4 } from 'uuid';


export interface propsLabel {
    url: string;
    func: "add" | "remove";
    newLabel?: string;
    indexLabel?: number;
}

export const controlLabels = ( 
    items: DataItems[],
    setItems: React.Dispatch<React.SetStateAction<DataItems[]>>

) => {
    return ({ func, url, indexLabel, newLabel }: propsLabel) => {
        const copyItems = structuredClone( items );
        const itemToEdit = copyItems.find( item => item.url === url );

        if ( !itemToEdit ) throw Error("Not find items with url")

        if ( func === "remove" ) {
            if ( indexLabel === undefined ) throw new Error("Not define 'indexLabel' for 'remove'");
            itemToEdit.labels.splice( indexLabel, 1 );
        }
        
        if ( func === "add" ) {
            if ( !newLabel ) throw new Error("Not define 'newLabel' for 'add'");
            itemToEdit.labels.push({ id: uuidv4(), name: newLabel });
        }

        setItems( copyItems );
    }
}