import { propsLabel } from "../helpers/controlLabels";
import { DataItems } from "../types/DataItems"
import { ButtonArticle } from "./ButtonArticle";
import { useState } from "react";
import { LabelCategory } from "./LabelCategory";
import { LabelInput } from "./LabelInput";

interface props {
    item: DataItems
    index: number
    labelControl: ({ func, index, indexLabel, newLabel }: propsLabel) => void
}

export const ArticleMod = ({ item, index, labelControl }: props) => {

    const { author, imageUrl, title, url } = item;

    const onOpenPageSteam = () => {
        window.open( url, "_blank" )
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


    return (
        <article className="flex shadow m-2 rounded mx-4 bg-white p-2 justify-between">
            <div className="flex gap-2">
                <div className="cursor-pointer flex items-center" onClick={ onOpenPageSteam }>
                    <img className="h-16 rounded object-contain" src={imageUrl} />
                </div>

                <div>
                    <h1 className="font-medium text-lg">{index + 1} - {title}</h1>
                    <h2>{author}</h2>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex flex-wrap gap-2 items-start max-w-[600px] justify-end">
                    {

                        item.labels.map( (label, index) => <LabelCategory index={ index } deleteLabel={ deleteLabel } key={label.id} title={label.name} /> )
                    }

                    {
                        adding && <LabelInput addLabel={ addLabel } />
                    }
                </div>

                {
                    adding 
                    ? <ButtonArticle onClick={ onToggleNewLabel } icon="xcross" />
                    : <ButtonArticle onClick={ onToggleNewLabel } icon="plus" />
                }
                

            </div>
        </article> 
    )
}
