import { useGetData } from "./hooks/useGetData.ts";


function App() {

    const { items } = useGetData()

    return (
        <div className="App">
            {
                items.map(({ author, title, url }) => <div>
                    <h1>{title}</h1>
                    <h2>{author}</h2>
                    <a>{url}</a>
                </div> )
            }
        </div>
    )
}

export default App