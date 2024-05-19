
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import DetailsArticle from './pages/DetailsArticle';
import Boutiques from './pages/Boutiques';
import BoutiqueDetails from './pages/BoutiqueDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profil from './pages/auth/Profil';
import MesBoutiques from './pages/auth/MesBoutiques';
import MaBoutique from './pages/auth/MaBoutique';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mes-boutiques" element={<MesBoutiques />} />
        <Route path="/ma-boutique/:id" element={<MaBoutique />} />
        <Route path="/boutique-details" element={<BoutiqueDetails />} />
        <Route path="/boutiques" element={<Boutiques />} />
        <Route path="/article" element={<DetailsArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paiement" element={<Checkout />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
