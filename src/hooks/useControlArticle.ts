import { useState } from "react";
import { propsLabel } from "../helpers/controlLabels";
import { DataItems } from "../types/DataItems";

interface props {
    item: DataItems;
    url: string;
    labelControl: ({ func, url, indexLabel, newLabel }: propsLabel) => void
}

export const useControlArticle = ({ item, url, labelControl }: props) => {

    const onOpenPageSteam = () => {
        window.open( item.url, "_blank" )
    }

    const [adding, setAdding] = useState(false);

    const onToggleNewLabel = () => {
        setAdding(!adding);
    }

    const deleteLabel = (indexLabel: number) => {
        labelControl({ func: "remove", url, indexLabel })
    }

    const addLabel = ( newLabel: string ) => {
        labelControl({ func: "add", url, newLabel })
    }


    return {
        onOpenPageSteam,
        onToggleNewLabel,
        deleteLabel,
        addLabel,
        adding
    }
}
