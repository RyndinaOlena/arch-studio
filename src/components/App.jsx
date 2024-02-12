import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Portfolio from "./Portfolio/Portfolio";
import BlogPages from "./BlogPages/BlogPages";
import ShopList from "./ShopList/ShopList";
import ShopPage from "./ShopPage/ShopPage";
import Footer from "./Footer/Footer";
import Loyaut from "./Loyaut";
import Pages from "./Pages/Pages";
import Servises from "./Servises/Servises";
import Contacts from "./Contacts/Contacts";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/BlogPages' element={<BlogPages />} />
          <Route exact path='/ShopList' element={<ShopList />} />
          <Route exact path='/ShopPage' element={<ShopPage />} />
          <Route exact path='/Servises' element={<Servises />} />
          <Route exact path='/Pages' element={<Pages />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/footer' element={<Footer />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>

    </>
  );
};
