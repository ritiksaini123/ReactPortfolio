import Home from "../../components/Home";
import { About } from "../../components/About";
import { Skill } from "../../components/Skills";
import { Services } from "../../components/Services";
import { Portfolio } from "../../components/Portfolio";
import { Contact } from "../../components/Contact";
export function HomePage(){
    return (
        <div>
            <Home/>
            <About/>
            <Skill/>
            <Services/>
            <Portfolio/>
            <Contact/>
            
        </div>
    )
}