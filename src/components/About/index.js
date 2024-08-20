import { Card } from "../Card"
import Button from "../common/button"
import img from '../../images/ritik.jpg.jpg'
import cv from '../../images/Ritik.pdf'

export function About() {
    return (
        <div id='about' className="flex-col flex-wrap  items-center justify-around mt-28 px-4 sm:mt-0 md:py-24 w-full h-full">
            <div className="text-center"><h2 className="text-5xl font-bold">About Me</h2>
                <p className="text-xl font-medium my-4">My Introduction</p></div>
            <div className="flex flex-wrap flex-col md:flex-row  items-center gap-10   justify-center">
            <img className='w-64 h-56 rounded-xl' src={img}></img>
                <div>
                    <div className="flex flex-wrap items-center gap-4 justify-between ">
                        <Card title='Experience' lable='1.5 years' />
                        <Card title='Project Completed' lable='5+' />
                        <Card title='Support' lable='online 24/7' />
                    </div>
                    <p className="my-5">Frontend Developer ,I created many websites with responsive Design</p>
                    <Button className='bg-black rounded text-white p-1'  onClick={() => window.location.href = cv} text='Download CV' />
                </div>
            </div>
        </div>
    )
}