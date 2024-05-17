/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const WishListSide = () => {
    return (
        <div id="wishlist_side" class="add_to_cart right">
            <a href="#" class="overlay" onclick="closeWishlist()"></a>
            <div class="cart-inner">
                <div class="cart_top">
                    <h3>Ma Wishlist</h3>
                    <div class="close-cart">
                        <a href="#" onclick="closeWishlist()">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="cart_media">
                </div>
            </div>
        </div>
    )
}

export default WishListSide