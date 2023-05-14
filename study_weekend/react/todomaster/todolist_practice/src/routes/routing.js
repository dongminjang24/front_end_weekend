import {createBrowserRouter} from 'react-router-dom'
import MainPage from '../pages/main'
import { Children } from 'react'
import Layout from '../components/Layout'
const router = createBrowserRouter([

    {
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <MainPage></MainPage>
            },
            {
                path:'/todo/:todoId',
                element: <MainPage></MainPage>
            }
        ]
    }
])

export default router