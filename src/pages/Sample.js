import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartSide from '../components/CartSide'
import WishListSide from '../components/WishListSide'
import MyAccountSide from '../components/MyAccountSide'
import TapTop from '../components/TapTop'

const Sample = () => {
    return (
        <>
            {/* <LoaderWrapper /> */}
            <Header />
            {/* main  */}
            <Footer />
            <CartSide />
            <WishListSide />
            <MyAccountSide />
            <TapTop />

        </>
    )
}

export default Sample