import { Outlet } from "react-router-dom";
import "./shop.styles.scss";

const Shop = () => {
  return (
    // <Routes>
    //   <Route index element={<CategoriesPreview />} />
    //   <Route path="/:category" element={<Category />} />
    // </Routes>
    <Outlet/>
  );
};

export default Shop;
