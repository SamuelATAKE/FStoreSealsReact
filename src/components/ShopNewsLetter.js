import React from 'react'

const ShopNewsLetter = () => {
    return (
        <section class="shop-newsletter section">
            <div class="container">
                <div class="inner-top">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 col-12">
                            <div class="inner">
                                <h4>Newsletter</h4>
                                <p> Abonnez-vous à notre Newsletter et bénéficiez de <span>10 %</span> sur votre premier achat</p>
                                <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                    <input name="EMAIL" placeholder="Votre adresse mail" required="" type="email" />
                                    <button class="btn">S'abonner</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopNewsLetter