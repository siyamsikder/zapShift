import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";


export const router =createBrowserRouter([
    {
        path:"/",
        Component: MainLayout,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path: '/coverage',
                element:<Coverage/>,
                loader:()=>fetch('/servicCenter.json').then(res=>res.json())
            }
        ]
        
    }
])