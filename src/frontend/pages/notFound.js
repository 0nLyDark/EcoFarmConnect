import { Link } from "react-router-dom";

function notFound(){
    return(
        <>
        {/* <!-- Single Page Header start --> */}
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">404 Error</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/">Pages</a></li>
                <li className="breadcrumb-item active text-white">404</li>
            </ol>
        </div>
        {/* <!-- Single Page Header End --> */}


        {/* <!-- 404 Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a className="btn border-secondary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- 404 End --> */}

        </>
    )
}
// function notFound(){
//     return(
//         <>
//             <div class="vesitable">
//     <div class="owl-carousel vegetable-carousel justify-content-center owl-loaded owl-drag">
//         <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1321px, 0px, 0px); transition: all 0s ease 0s; width: 5284px;"><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Potatoes</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Potatoes</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item active" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$4.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item active" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-1.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$4.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item active" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-3.png" class="img-fluid w-100 rounded-top bg-light" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Banana</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item active" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-4.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Bell Papper</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Potatoes</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Potatoes</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$4.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-1.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Parsely</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$4.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-3.png" class="img-fluid w-100 rounded-top bg-light" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Banana</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div><div class="owl-item cloned" style="width: 305.25px; margin-right: 25px;"><div class="border border-primary rounded position-relative vesitable-item">
//         <div class="vesitable-img">
//         <img src="img/vegetable-item-4.jpg" class="img-fluid w-100 rounded-top" alt="">
//         </div>
//         <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; right: 10px;">Vegetable</div>
//         <div class="p-4 pb-0 rounded-bottom">
//         <h4>Bell Papper</h4>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//         <div class="d-flex justify-content-between flex-lg-wrap">
//         <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
//         <a href="#" class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//         </div>
//         </div>
//         </div></div></div></div><div class="owl-nav"><div class="owl-prev"><i class="bi bi-arrow-left"></i></div><div class="owl-next"><i class="bi bi-arrow-right"></i></div></div><div class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div>
//     </div>
// </div>
//         </>
//     )

// }
export default notFound;