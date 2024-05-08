import { ArticleMod } from "./components/ArticleMod.tsx";
import { useGetData } from "./hooks/useGetData.ts";
import { useState } from "react";
import { searchTerms } from "./helpers/searchTerms.ts";
import { SearchMod } from "./components/SearchMod.tsx";


function App() {

    const { items } = useGetData()

    const [currentSearch, setCurrentSearch] = useState("")



    return (
        <div className="App">

            <SearchMod setCurrentSearch={ setCurrentSearch } />

            {
                items
                    .filter(( item ) => searchTerms( currentSearch, item ) )
                    .map( item => <ArticleMod key={ item.url } item={item} /> )
            }
        </div>
    )
}

export default App