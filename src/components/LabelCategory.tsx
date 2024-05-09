interface props {
    title: string;
    index: number;
    deleteLabel: ( index: number ) => void;
}

export const LabelCategory = ({ title, deleteLabel, index }: props) => (
    <div className="bg-slate-300 h-6 text-sm rounded px-1 capitalize items-center shadow text-center flex gap-1">
        <p>{ title }</p>

        <button 
            onClick={ () => deleteLabel( index ) } 
            className="flex text-center p-0.5 "
        >
            <i className="fa-solid fa-xmark m-auto"/>
        </button>
    </div>
)
