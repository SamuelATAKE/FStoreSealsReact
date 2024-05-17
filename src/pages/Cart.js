import React, { useState } from 'react'
import Footer from '../components/Footer'
import ShopServices from '../components/ShopServices'
import ShopNewsLetter from '../components/ShopNewsLetter'
import CommonHeader from '../components/CommonHeader'

const Cart = () => {
    const [article1, setArticle1] = useState(11000);
    const [quantite1, setQuantite1] = useState(1);
    const [article2, setArticle2] = useState(11000);
    const [quantite2, setQuantite2] = useState(2);
    const [article3, setArticle3] = useState(11000);
    const [quantite3, setQuantite3] = useState(3);

    return (
        <>
            <CommonHeader />

            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="bread-inner">
                                <ul class="bread-list">
                                    <li><a href="/">Accueil<i class="ti-arrow-right"></i></a></li>
                                    <li class="active"><a href="/panier">Panier</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shopping-cart section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <table class="table shopping-summery">
                                <thead>
                                    <tr class="main-hading">
                                        <th>Produit</th>
                                        <th>Nom</th>
                                        <th class="text-center">Prix unitaire</th>
                                        <th class="text-center">Quantité</th>
                                        <th class="text-center">Total</th>
                                        <th class="text-center"><i class="ti-trash remove-icon"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="/#" /></td>
                                        <td class="product-des" data-title="Description">
                                            <p class="product-name"><a href="/#">Vêtement pour femme</a></p>
                                            <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                                        </td>
                                        <td class="price" data-title="Price"><span>{new Intl.NumberFormat("en-DE").format(
                                            Math.trunc(article1)
                                        )} FCFA </span></td>
                                        <td class="qty" data-title="Qty">
                                            <div class="input-group">
                                                <div class="button minus">
                                                    <button type="button" class="btn btn-primary btn-number" data-type="minus" data-field="quant[1]" onClick={() => setQuantite1(quantite1 - 1)}>
                                                        <i class="ti-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" name="quant[1]" class="input-number" data-min="1" data-max="100" value={quantite1} onChange={(e) => setQuantite1(e.target.value)} />
                                                <div class="button plus">
                                                    <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]" onClick={() => setQuantite1(quantite1 + 1)}>
                                                        <i class="ti-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="total-amount" data-title="Total"><span>{new Intl.NumberFormat("en-DE").format(
                                            Math.trunc(article1 * quantite1)
                                        )} FCFA</span></td>
                                        <td class="action" data-title="Remove"><a href="/#"><i class="ti-trash remove-icon"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="/#" /></td>
                                        <td class="product-des" data-title="Description">
                                            <p class="product-name"><a href="/#">Vêtement pour femme</a></p>
                                            <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                                        </td>
                                        <td class="price" data-title="Price"><span>{new Intl.NumberFormat("en-DE").format(
                                            Math.trunc(article2)
                                        )} FCFA </span></td>
                                        <td class="qty" data-title="Qty">
                                            <div class="input-group">
                                                <div class="button minus">
                                                    <button type="button" class="btn btn-primary btn-number" data-type="minus" data-field="quant[2]" onClick={() => setQuantite2(quantite2 - 1)}>
                                                        <i class="ti-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" name="quant[2]" class="input-number" data-min="1" data-max="100" value={quantite2} onChange={(e) => setQuantite2(e.target.value)} />
                                                <div class="button plus">
                                                    <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[2]" onClick={() => setQuantite2(quantite2 + 1)}>
                                                        <i class="ti-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="total-amount" data-title="Total"><span>{new Intl.NumberFormat("en-DE").format(
                                            Math.trunc(article2 * quantite2)
                                        )} FCFA</span></td>
                                        <td class="action" data-title="Remove"><a href="/#"><i class="ti-trash remove-icon"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="/#" /></td>
                                        <td class="product-des" data-title="Description">
                                            <p class="product-name"><a href="/#">Vêtement pour femmes</a></p>
                                            <p class="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
                                        </td>
                                        <td class="price" data-title="Price"><span>{new Intl.NumberFormat("en-DE").format(
                                            Math.trunc(article3)
                                        )} FCFA </span></td>
                                        <td class="qty" data-title="Qty">
                                            <div class="input-group">
                                                <div class="button minus">
                                                    <button type="button" class="btn btn-primary btn-number" data-type="minus" data-field="quant[3]" onClick={() => setQuantite3(quantite3 - 1)}>
                                                        <i class="ti-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" name="quant[3]" class="input-number" data-min="1" data-max="100" value={quantite3} onChange={(e) => setQuantite3(e.target.value)} />
                                                <div class="button plus">
                                                    <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[3]" onClick={() => setQuantite3(quantite3 + 1)}>
                                                        <i class="ti-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="total-amount" data-title="Total"><span>{new Intl.NumberFormat("en-DE").format(
                                            Math.trunc(article3 * quantite3)
                                        )} FCFA</span></td>
                                        <td class="action" data-title="Remove"><a href="/#"><i class="ti-trash remove-icon"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="total-amount">
                                <div class="row">
                                    <div class="col-lg-8 col-md-5 col-12">
                                        <div class="left">
                                            <div class="coupon">
                                                <form>
                                                    <input name="Coupon" placeholder="Entrez votre coupon" />
                                                    <button class="btn">Appliquer</button>
                                                </form>
                                            </div>
                                            <div class="checkbox">
                                                <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" /> Livraion (+1.000 FCFA)</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-7 col-12">
                                        <div class="right">
                                            <ul>
                                                <li>Sous-total Panier<span>{new Intl.NumberFormat("en-DE").format(
                                                    Math.trunc(article1 * quantite1 + article2 * quantite2 + article3 * quantite3)
                                                )} FCFA</span></li>
                                                <li>Livraison<span>Gratuite</span></li>
                                                <li>Vous gagnez<span>2.000 FCFA</span></li>
                                                <li class="last">Vous payez<span>{new Intl.NumberFormat("en-DE").format(
                                                    Math.trunc(article1 * quantite1 + article2 * quantite2 + article3 * quantite3 - 2000)
                                                )}</span></li>
                                            </ul>
                                            <div class="button5">
                                                <a href="/#" class="btn">Vérification</a>
                                                <a href="/#" class="btn">Continuer d'acheter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShopServices />
            <ShopNewsLetter />
            <Footer />

        </>
    )
}

export default Cart