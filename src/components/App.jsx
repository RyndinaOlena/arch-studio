import { Route, Routes } from "react-router-dom";

import Portfolio from "./Portfolio/Portfolio";
import HomePage from "./home/HomePage";
import BlogPages from "./BlogPages/BlogPages";
import ShopList from "./Pages/shopList";
import Footer from "./Footer/Footer";
import Layout from "./Loyaut";
import Pages from "./Pages/Pages";
import Services from "./Servises/Services";
import Contacts from "./Contacts/Contacts";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/BlogPages' element={<BlogPages />} />
          <Route exact path='/ShopList' element={<ShopList />} />
          <Route exact path='/Servises' element={<Services />} />
          <Route exact path='/Pages' element={<Pages />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/footer' element={<Footer />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>

    </>
  );
};
