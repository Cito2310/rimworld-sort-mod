interface props {
    icon: "eye-slash" | "eye" | "plus"
}

export const ButtonArticle = ({ icon }: props) => {
    
    const setIcon = () => {
        if ( icon === "plus" ) return <i className="fa-solid fa-plus" />
        if ( icon === "eye-slash" ) return <i className="fa-regular fa-eye-slash" />
        if ( icon === "eye" ) return <i className="fa-regular fa-eye" />
    }

    return (
        <button className="rounded w-10 p-1 text-xl bg-slate-300 shadow text-white hover:brightness-[.98] hover:shadow-none transition-base active:brightness-[.95]">
            { setIcon() }
        </button>
    )
}
