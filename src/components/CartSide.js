/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CartSide = () => {
    return (
        <div id="cart_side" class="add_to_cart right">
            <a href="#" class="overlay" onclick="closeCart()"></a>
            <div class="cart-inner">
                <div class="cart_top">
                    <h3>Mon panier</h3>
                    <div class="close-cart">
                        <a href="#" onclick="closeCart()">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="cart_media">
                    <ul class="cart_product">
                        {/* @forelse((array) session('articles') as $art) */}
                        <li>
                            <div class="media">
                                <a href="#">
                                    <img alt="" class="mr-3" src="/assets/images/product/1.jpg" />
                                </a>
                                <div class="media-body">
                                    <a href="#">
                                        <h4>Nom produit</h4>
                                    </a>
                                    <h4>
                                        <span>1 x prix unitaire F</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="close-circle">
                                <a href="#">
                                    <i class="ti-trash" aria-hidden="true"></i>
                                </a>
                            </div>
                        </li>
                        @empty
                        <li>
                            <div class="media">
                                <div class="media-body">
                                    <a href="#">
                                        <h4>Aucun article ajouté</h4>
                                    </a>

                                </div>
                            </div>
                        </li>
                        @endforelse
                    </ul>
                    <ul class="cart_total">
                        <li>
                            <div class="total">
                                <h5>Total : <span>299.00 FCFA</span></h5>
                            </div>
                        </li>
                        <li>
                            <div class="buttons">
                                <a href="{{ route('profil.cart') }}"
                                    class="btn btn-solid btn-block btn-solid-sm view-cart">Voir Panier</a>
                                <a href="#" class="btn btn-solid btn-solid-sm btn-block checkout">Paiement</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartSide