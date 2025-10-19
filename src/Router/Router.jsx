import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import { Component } from "react";
import HOme from "../pages/HOme";
import Catagory from "../pages/CatagoryAllNewsShjow";
import CatagoryAllNewsShjow from "../pages/CatagoryAllNewsShjow";
import LogIn from "../Sign in/LogIn";
import Register from "../Sign in/Register";
import Auth from "../Root/Auth";
import NewsDeels from "../pages/NewsDeels";
import PrivateAuth from "../Authintications/PrivateAuth";



  export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children:[
            {
                path:'/',
                Component: HOme
            },{
                path:'catagory/:id',
                loader: () => fetch('/News.json') ,
                Component: CatagoryAllNewsShjow
            },
           
             
        ]
    },
    {
        path:'auth',
        Component: Auth,
        children:[
           {
                path:'/auth/login',
                Component: LogIn
            },{
                path:'/auth/Register',

                Component: Register
            }
        ]
    },
    {
        path:'news-details/:id',
        loader: () => fetch('/News.json') ,
        element: <PrivateAuth><NewsDeels></NewsDeels></PrivateAuth>
    }
 ])


// import { createBrowserRouter } from "react-router-dom";
// import Root from "../Root/Root";
// import HOme from "../pages/HOme";
// import CatagoryAllNewsShjow from "../pages/CatagoryAllNewsShjow";
// import LogIn from "../Sign in/LogIn";
// import Register from "../Sign in/Register";

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />, // 💥 Component → element
//     children: [
//       { path: '/', element: <HOme /> },
//       { 
//         path: 'catagory/:id',
//         loader: () => fetch('/News.json'),
//         element: <CatagoryAllNewsShjow /> 
//       },
//       { path: 'login', element: <LogIn /> }, // Root child route
//       { path: 'register', element: <Register /> },
//     ],
//   },
// ]);
