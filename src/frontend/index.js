
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css"
import "./assets/lib/lightbox/css/lightbox.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css"


import Header from './partial/header'
import Footer from './partial/footer'

import { Outlet } from 'react-router-dom'
function Index(){
  
    return(
        <>
        <Header />
            <Outlet />
        <Footer />
        </>
    )
}
export default Index;