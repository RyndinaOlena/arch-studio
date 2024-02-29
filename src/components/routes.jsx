
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

  export const routeToPath = [{
    route: '/portfolio',
  component: Portfolio,
            
            }
  ]