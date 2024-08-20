import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Layout } from "../Layout";
import { HomePage } from "../../Pages/Home";
import {About} from '../../components/About'
export function Router(){ 
const Route=createBrowserRouter([

        {path:'/',
    element:<Layout/>,
    children:[
        {
            path:'/',
            element:<HomePage/>
        },
       
    ]
    },
    ])
return(
    <RouterProvider router={Route}></RouterProvider>
)
}
