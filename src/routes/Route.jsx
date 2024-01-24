import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Category from "../components/Category/Category/Category";
import News from "../components/News/News/News";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category:id',
                element: <Category></Category>
            },
            {
                path: '/news:id',
                element: <News></News>
            },
        ]
    }
    
])