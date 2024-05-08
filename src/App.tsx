import { ArticleMod } from "./components/ArticleMod.tsx";
import { useGetData } from "./hooks/useGetData.ts";


function App() {

    const { items } = useGetData()

    return (
        <div className="App">
            {
                items.map(( item ) => <ArticleMod item={item} /> )
            }
        </div>
    )
}

export default App