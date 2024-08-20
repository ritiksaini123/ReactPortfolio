import { Card } from "../Card"
import Button from "../common/button"
import img from '../../images/ritik.jpg.jpg'
import calender from '../../images/icons/download.png'
export function Portfolio() {

    const Education=[{
        course:'10TH',
        institute:'Shivalik Sen Sec School',
        duration:'2015-2016'
    },
    {    course:'12TH',
    institute:'Shivalik Sen Sec School',
    duration:'2017-2018'
},
{    course:'Gradution',
institute:'Mukand Lal National College',
duration:'2018-2021'
}
]
const Experience=[{
    role:'Software engineer Trainee',
    companyname:'UcodeSoft Solution pvt ltd',
    duration:'jan 2023 - june 2023'
},
{
role:'Jr Web Developer',
companyname:'Euclidee Software Solution',
duration:'july 2023 - feb2024'
},
{
    role:'Jr React Developer',
    companyname:'IT Waves',
    duration:'feb-2024 - July 2024'
    },
    
]
    return (
        <div id='portfolio' className="flex-col flex-wrap  items-center    mt-28 px-4 sm:mt-0 md:py-24 h-full md:h-screen">
            <div className="text-center"><h2 className="text-5xl font-bold">Qualification</h2>
                <p className="text-xl font-medium">My personal Journay</p></div>
                <div className="flex flex-wrap items-center gap-4 justify-evenly my-10">
                    <div className="rounded-xl bg-white grid gap-6  border-2 border-slate-200 border-solid grid-cols-1  p-2 items-center justify-center">
                        <h2 className="font-bold">Education</h2>
                        {Education.map(( element)=>(<div className="flex flex-wrap  gap-2"><span className="h-5 w-5 rounded-full text-white flex items-center justify-center  bg-black">&#10004;</span><div className="flex items-start flex-col"><p className="font-bold">{element.course}</p><span>{element.institute}</span><span className="flex items-center gap-2"><img className="h-5" src={calender}></img>{element.duration}</span></div></div>))}
                    </div>
                    <div className="rounded-xl bg-white grid gap-6  border-2 border-slate-200 border-solid grid-cols-1  p-2 items-center justify-center">
                    <h2 className="font-bold">Experience</h2>

                        {Experience.map((element)=>(<div className="flex flex-wrap  gap-2"><span className="h-5 w-5 rounded-full text-white flex items-center justify-center  bg-black">&#10004;</span><div className="flex items-start flex-col"><p className="font-bold">{element.role}</p><span>{element.companyname}</span><span className="flex items-center gap-2"><img className="h-5" src={calender}></img>{element.duration}</span></div></div>))}
                    </div>
                </div>
            </div>
    )
}