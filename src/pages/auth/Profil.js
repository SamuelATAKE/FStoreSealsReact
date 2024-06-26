import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import Footer from '../../components/Footer'
import "../../styles/profil.css"
import { LOGGED_USER } from '../../variables/constants'

const Profil = () => {

    return (
        <>
            <CommonHeader />
            <div class="container-xl px-4 mt-4">

                <nav class="nav nav-borders">
                    <a class="nav-link active ms-0"
                        href="/profil">Profil</a>
                    {LOGGED_USER.profile === "MARCHAND" ? <a class="nav-link" href="/mes-boutiques">Boutiques</a> : null}
                </nav>
                <hr class="mt-0 mb-4" />
                <div class="row">
                    <div class="col-xl-4">

                        <div class="card mb-4 mb-xl-0">
                            <div class="card-header">Profile Picture</div>
                            <div class="card-body text-center">

                                <img class="img-account-profile rounded-circle mb-2"
                                    src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="im" />

                                <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>

                                <button class="btn btn-primary" type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">

                        <div class="card mb-4">
                            <div class="card-header">Account Details</div>
                            <div class="card-body">
                                <form>

                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Username (how your name will appear to
                                            other users on the site)</label>
                                        <input class="form-control" id="inputUsername" type="text"
                                            placeholder="Enter your username" value="username" />
                                    </div>

                                    <div class="row gx-3 mb-3">

                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">First name</label>
                                            <input class="form-control" id="inputFirstName" type="text"
                                                placeholder="Enter your first name" value="Valerie" />
                                        </div>

                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">Last name</label>
                                            <input class="form-control" id="inputLastName" type="text"
                                                placeholder="Enter your last name" value="Luna" />
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">

                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputOrgName">Organization name</label>
                                            <input class="form-control" id="inputOrgName" type="text"
                                                placeholder="Enter your organization name" value="Start Bootstrap" />
                                        </div>

                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLocation">Location</label>
                                            <input class="form-control" id="inputLocation" type="text"
                                                placeholder="Enter your location" value="San Francisco, CA" />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                        <input class="form-control" id="inputEmailAddress" type="email"
                                            placeholder="Enter your email address" value="name@example.com" />
                                    </div>

                                    <div class="row gx-3 mb-3">

                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputPhone">Phone number</label>
                                            <input class="form-control" id="inputPhone" type="tel"
                                                placeholder="Enter your phone number" value="555-123-4567" />
                                        </div>

                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputBirthday">Birthday</label>
                                            <input class="form-control" id="inputBirthday" type="text" name="birthday"
                                                placeholder="Enter your birthday" value="06/10/1988" />
                                        </div>
                                    </div>

                                    <button class="btn btn-primary" type="button">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profil