export function Card({...props}){
    return(
        <div className="bg-white w-full sm:w-36 sm:h-24 h-48 rounded-xl flex items-center flex-col px-10  justify-center">
            <img src={props.url}></img>
            <h2 className="font-medium">{props.title}</h2>
            <p>{props.lable}</p>
        </div>
    )
}