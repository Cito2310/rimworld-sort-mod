import { ArticleMod } from "./components/ArticleMod.tsx";
import { useControlData } from "./hooks/useControlData.ts";
import { useState } from "react";
import { searchTerms } from "./helpers/searchTerms.ts";
import { SearchMod } from "./components/SearchMod.tsx";


function App() {

    const {items, labelControl} = useControlData()

    const [currentSearch, setCurrentSearch] = useState("")



    return (
        <div className="App">

            <SearchMod setCurrentSearch={ setCurrentSearch } />

            {
                items
                    .filter( item => searchTerms( currentSearch, item ) )
                    .map( item => <ArticleMod labelControl={ labelControl } key={ item.url } item={item} /> )
            }
        </div>
    )
}

export default App