import { useState } from "react";
import { propsLabel } from "../helpers/controlLabels";
import { DataItems } from "../types/DataItems";

interface props {
    item: DataItems;
    index: number;
    labelControl: ({ func, index, indexLabel, newLabel }: propsLabel) => void
}

export const useControlArticle = ({ item, index, labelControl }: props) => {

    const onOpenPageSteam = () => {
        window.open( item.url, "_blank" )
    }

    const [adding, setAdding] = useState(false);

    const onToggleNewLabel = () => {
        setAdding(!adding);
    }

    const deleteLabel = (indexLabel: number) => {
        labelControl({ func: "remove", index, indexLabel })
    }

    const addLabel = ( newLabel: string ) => {
        labelControl({ func: "add", index, newLabel })
    }


    return {
        onOpenPageSteam,
        onToggleNewLabel,
        deleteLabel,
        addLabel,
        adding
    }
}
