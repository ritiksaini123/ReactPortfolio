import { Card } from "../Card"
import Button from "../common/button"
import img from '../../images/ritik.jpg.jpg'
import email from '../../images/icons/download (1).png'
import whastapp from '../../images/icons/download (2).png'

export function Contact() {
    return (
        <div id='contact' className="flex-col flex-wrap  items-center justify-around   mt-28 px-4 sm:mt-0 md:py-24 h-full md:h-screen">
            <div className="text-center"><h2 className="text-5xl font-bold">Contact Me</h2>
                <p className="text-xl font-medium">Get in touch</p></div>
            <div className="flex flex-wrap  items-center gap-4 justify-evenly py-10">
                <div className="rounded-xl bg-white flex flex-col gap-4  border-2 border-slate-200 border-solid grid-cols-1 w-52  p-4 items-center justify-center">
                    <img  className='h-10' src={email}></img>
                    <p className="font-bold">Email</p><p>ritikdahiya788gmail.com</p>< Button showarrow='true' className='bg-black rounded text-white px-3 py-1' text='Write me' onClick={() => window.location.href = 'mailto:ritikdahiya788@gmail.com'} /></div>
                <div className="rounded-xl bg-white flex flex-col gap-4  border-2 border-slate-200 border-solid grid-cols-1  w-52 p-4 items-center justify-center">
                <img className="h-10" src={whastapp}></img>

                    <p className="font-bold">whatsapp</p><p>7419119718</p>< Button showarrow='true' className='bg-black rounded text-white px-3 py-1' text='Write me' onClick={() => window.location.href = 'https://wa.me/7419119718'} /></div>
            </div>
        </div>
    )
}