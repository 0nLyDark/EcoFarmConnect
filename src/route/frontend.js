import Home from "../frontend/pages/Home/home"
import ProductList from "../frontend/pages/Product/product";

import NotFound from "../frontend/pages/notFound";
const FontendRoute = [
    {'path':'/','component':Home},
    {'path':'/san-pham','component':ProductList},


    {'path':'*','component':NotFound}
];

export default FontendRoute;