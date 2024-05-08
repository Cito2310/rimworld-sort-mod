import { DataItems } from "../types/DataItems";

export const searchTerms = ( currentSearch: string, { author, title }: DataItems ) => {
    const allTerms = author + " " + title;
    const regexSearch = new RegExp( currentSearch, "i" )

    return regexSearch.test( allTerms )
}