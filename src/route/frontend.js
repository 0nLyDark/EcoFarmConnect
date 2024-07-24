import Home from "../frontend/pages/Home/home";
import ProductList from "../frontend/pages/Product/product";
import ProductDetail from "../frontend/pages/Product/productDetail"
import Contact from "../frontend/pages/Contact/contact";
import NotFound from "../frontend/pages/notFound";
const FontendRoute = [
    {'path':'/','component':Home},
    {'path':'/san-pham','component':ProductList},
    {'path':'/chi-tiet-san-pham','component':ProductDetail},

    {'path':'/lien-he','component':Contact},


    {'path':'*','component':NotFound}
];

export default FontendRoute;