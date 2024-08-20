import { Card } from "../Card"
import Button from "../common/button"
import img from '../../images/ritik.jpg.jpg'
import website from '../../images/icons/images.jpg'
import website1 from '../../images/icons/images (1).jpg'

export function Services() {

    return (
        <div id='services' className="flex-col flex-wrap  items-center justify-around mt-28 md:py-24  h-full md:h-screen">
            <div className="text-center"><h2 className="text-5xl font-bold">Services</h2>
                <p className="text-xl font-medium">What i offer</p></div>
                <div className="flex flex-wrap items-center justify-evenly gap-4 my-10">
                    <div className="rounded-xl bg-white flex flex-col w-64 h-64 p-2 items-center border-2 border-slate-200	border-solid justify-center">
                       <img className="h-32" src={website}></img>
                        <p className="font-bold">Website Design</p>
                    </div>
                    <div className="rounded-xl bg-white flex flex-col w-64 h-64 p-2 border-2 border-slate-200 border-solid items-center justify-center">
                    <img className="h-36" src={website1}></img>

                     <p className="font-bold">Web Development</p>
                    </div>
                </div>
            </div>
    )
}