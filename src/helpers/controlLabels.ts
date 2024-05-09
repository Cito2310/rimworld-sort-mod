import { DataItems } from "../types/DataItems";

import { v4 as uuidv4 } from 'uuid';


export interface propsLabel {
    index: number;
    func: "add" | "remove";
    newLabel?: string;
    indexLabel?: number;
}

export const controlLabels = ( 
    items: DataItems[],
    setItems: React.Dispatch<React.SetStateAction<DataItems[]>>

) => {
    return ({ func, index, indexLabel, newLabel }: propsLabel) => {
        const copyItems = structuredClone( items );

        if ( func === "remove" ) {
            console.log(indexLabel)

            if ( indexLabel === undefined ) throw new Error("Not define 'indexLabel' for 'remove'");
            copyItems[index].labels.splice( indexLabel, 1 );
        }

        if ( func === "add" ) {
            if ( !newLabel ) throw new Error("Not define 'newLabel' for 'add'");
            copyItems[index].labels.push({ id: uuidv4(), name: newLabel });
        }

        setItems( copyItems );
    }
}