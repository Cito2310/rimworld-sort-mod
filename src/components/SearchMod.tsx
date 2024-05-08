import { useEffect } from "react"
import { useForm } from "react-hook-form"

interface props {
    setCurrentSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchMod = ({ setCurrentSearch }: props) => {

    const { register, reset, getValues, watch } = useForm()

    useEffect(() => {
        setCurrentSearch( getValues("search") )
    }, [watch("search")])

    const onReset = () => { reset({search:""}) }



    return (
        <div className="bg-slate-300 h-10 flex justify-center">
            <div className="bg-white flex" >

                <input className="outline-none px-5" placeholder="Buscar" {...register("search")} />

                <button 
                    onClick={ onReset }
                    className="transition-base hover:brightness-[.9] active:brightness-[0.7] aspect-square"
                >
                    <i className="text-2xl fa-solid fa-xmark text-slate-300"/>
                </button>

            </div>
        </div>
    )
}
