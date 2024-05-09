import { DataItems } from "../types/DataItems";

export const searchTerms = ( currentSearch: string, { author, title, labels }: DataItems ) => {
    const labelsOnlyName = labels.map( label => label.name )

    const allTerms = `${author} ${title} ${labelsOnlyName.join(" ")}`;
    const regexSearch = new RegExp( currentSearch, "i" )
    
    return regexSearch.test( allTerms )
}