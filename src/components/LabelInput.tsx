import { useForm } from "react-hook-form";


interface props {
    addLabel: (newLabel: string) => void
}

export const LabelInput = ({ addLabel }: props) => {
    const { register, getValues, handleSubmit, reset  } = useForm({ defaultValues: { newLabel: "" } })

    const onNewLabel = () => {
        const value = getValues( "newLabel" ).trim();
        
        if ( value.length <= 3 ) return;

        reset({ newLabel: "" });
        addLabel( value );
    }


    return (
        <form onSubmit={ handleSubmit( onNewLabel ) } className="bg-slate-300 h-6 text-sm rounded px-1 capitalize items-center shadow text-center flex gap-1">
            <input className="bg-transparent outline-none" {...register("newLabel")} ></input>

            <button 
                className="flex text-center p-0.5 "
            >
                <i className="fa-solid fa-check m-auto"/>
            </button>
        </form>
    )
}