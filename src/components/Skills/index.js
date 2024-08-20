import { Card } from "../Card"
import Button from "../common/button"
import img from '../../images/ritik.jpg.jpg'
export function Skill() {
    const skills=[{
        skill:'HTML',
        level:'Advance'
    },
    {
        skill:'CSS',
        level:'Advance'
    },
    {
        skill:'JAVASCRIPT',
        level:'Basic'
    }
    ,{
        skill:'TAILWIND',
        level:'Basic'
    },
    {
        skill:'REACT',
        level:'Basic'
    },
    {
        skill:'WORDPRESS',
        level:'Basic'
    }
]
const backendSkills=[{
    skill:'PHP',
    level:'Advance'
},
{
    skill:'MYSQL',
    level:'Advance'
},
{
    skill:'FIREBASE',
    level:'Basic'
},
{
    skill:'NODEJS',
    level:'Basic'
}

]
    return (
        <div id='skills' className="flex-col flex-wrap  items-center justify-around px-4 mt-28 md:py-24 h-screen">
            <div className="text-center"><h2 className="text-5xl font-bold">Skills</h2>
                <p className="text-xl font-medium">My techinical Level</p></div>
                <div className="flex flex-wrap items-center gap-4 justify-evenly my-10">
                    <div className="rounded-xl w-full md:w-auto bg-white grid gap-6  border-2 border-slate-200 border-solid grid-cols-2 h-64 p-2 items-center justify-center">
                        {skills.map((element)=>(<div className="flex flex-wrap  gap-2"><span className="h-5 w-5 rounded-full invisible md:visible text-white flex items-center justify-center  bg-black">&#10004;</span><div className="flex items-start flex-col"><p className="font-bold">{element.skill}</p><span>{element.level}</span></div></div>))}
                    </div>
                    <div className="rounded-xl w-full md:w-auto bg-white grid gap-6  border-2 border-slate-200 border-solid grid-cols-2 h-64 p-2 items-center justify-center">
                        {backendSkills.map((element)=>(<div className="flex flex-wrap  gap-2"><span className="h-5 w-5 md:visible invisible rounded-full text-white flex items-center justify-center  bg-black">&#10004;</span><div className="flex items-start flex-col"><p className="font-bold">{element.skill}</p><span>{element.level}</span></div></div>))}
                    </div>
                </div>
            </div>
    )
}