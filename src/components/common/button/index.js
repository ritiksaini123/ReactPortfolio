import arrow from '../../../images/icons/download6.png'
export default function Button({className,...props}){
    return (
    <button className={className}  onClick={props.onClick}>{props.text}{props.showarrow &&<img  className='h-3 px-2 inline' src={arrow}></img>}</button>
    )
}