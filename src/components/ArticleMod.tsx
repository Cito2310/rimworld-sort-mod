import { DataItems } from "../types/DataItems"

interface props {
    item: DataItems
}

export const ArticleMod = ({ item }: props) => {

    const { author, imageUrl, title, url } = item;

    const onOpenPageSteam = () => {
        window.open( url, "_blank" )
    }

    return (
        <article className="flex shadow m-2 rounded mx-4 gap-2 bg-white p-2">
            <div className="cursor-pointer" onClick={ onOpenPageSteam }>
                <img className="h-20 rounded" src={imageUrl} />
            </div>

            <div>
                <h1 className="font-medium text-lg">{title}</h1>
                <h2>{author}</h2>
            </div>
        </article> 
    )
}
