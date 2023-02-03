import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  fetchCategoriesStart,
} from "../../store/categories/category.action";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    // <Routes>
    //   <Route index element={<CategoriesPreview />} />
    //   <Route path="/:category" element={<Category />} />
    // </Routes>
    <Outlet />
  );
};

export default Shop;
