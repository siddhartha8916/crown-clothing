import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryArray));
    };
    getCategoriesMap();
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
