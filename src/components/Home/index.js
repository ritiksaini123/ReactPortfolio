import Button from "../common/button"
import img from '../../images/ritik.jpg.jpg'

export default function Home(){
    return(
        <div  className="flex flex-wrap px-4 items-center justify-around mt-28 sm:mt-0  h-screen">
            <div className="w-72" >
                <h2 id="home" className="text-5xl font-bold">Ritik Dahiya</h2>
                <p className="text-xl font-medium">Web Developer</p>
                <p className="my-5">I'm a web Developer from Haryana and I'm very passionate and dedicated to my work</p>
                <Button className='bg-black rounded text-white px-3 py-1' text='Say Hey'/>
            </div>
            <img className='w-64 h-56 rounded-xl' src={img}></img>
        </div>
    )
}