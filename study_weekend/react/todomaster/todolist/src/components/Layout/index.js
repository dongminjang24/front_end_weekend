import React from "react"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import { Outlet } from "react-router-dom"

const Layout = ()=>{

    return(
        <React.Fragment>
            <Header></Header>
                <Outlet>
                    {/*하위라우트중에 맞는 걸 가져와서 할 수 있음*/}
                </Outlet>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Layout