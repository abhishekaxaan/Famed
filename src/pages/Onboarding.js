import React from 'react'
// import { useState } from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {
      const handleSubmit = () => {
            console.log('onboarding submitted successfully')
      }

      const handleChange = () => {
            console.log('change')
      }

      return (
            <div>
                  <Nav colorLogo={true} />
                  <div className="onboarding">
                        <h2>CREATE ACCOUNT</h2>
                        <form onSubmit={handleSubmit}>
                              <section>
                                    <label htmlFor="fullName">Full Name</label>
                                    <div className="fullName">
                                          <input
                                                id="firstName"
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                required={true}
                                                value={''}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="middleName"
                                                type="text"
                                                name="middleName"
                                                placeholder="Middle Name (optional)"
                                                required={false}
                                                value={''}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="lastName"
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                required={true}
                                                value={''}
                                                onChange={handleChange}
                                          />
                                    </div>
                                    <label>Birthday</label>
                                    <div className="dobInput">
                                          <input
                                                id="dobDay"
                                                type="number"
                                                name="dobDay"
                                                placeholder="DD"
                                                required={true}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="dobMonth"
                                                type="number"
                                                name="dobMonth"
                                                placeholder="MM"
                                                required={true}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="dobYear"
                                                type="number"
                                                name="dobYear"
                                                placeholder="YYYY"
                                                required={true}
                                                onChange={handleChange}
                                          />
                                    </div>
                                    <label> Gender</label>
                                    <div className="genderInput">
                                          <input
                                                id="maleGenderIdentity"
                                                type="radio"
                                                name="genderIdentity"
                                                value="male"
                                                onChange={handleChange}
                                                checked={false}
                                          />
                                          <label htmlFor="maleGenderIdentity">
                                                MALE
                                          </label>
                                          <input
                                                id="femaleGenderIdentity"
                                                type="radio"
                                                name="genderIdentity"
                                                value="female"
                                                onChange={handleChange}
                                                checked={false}
                                          />
                                          <label htmlFor="femaleGenderIdentity">
                                                FEMALE
                                          </label>
                                          <input
                                                id="transGenderIdentity"
                                                type="radio"
                                                name="genderIdentity"
                                                value="trans"
                                                onChange={handleChange}
                                                checked={false}
                                          />
                                          <label htmlFor="transGenderIdentity">
                                                TRANS
                                          </label>
                                    </div>
                                    <div className="showGender">
                                          <input
                                                id="showGender"
                                                type="checkbox"
                                                name="showGender"
                                                onChange={handleChange}
                                                checked={false}
                                          />
                                          <label htmlFor="showGender">
                                                Show Gender on my Profile.
                                          </label>
                                    </div>
                                    <input type="submit" />
                              </section>
                              <section>
                                    <label htmlFor="url">PROFILE PICTURE</label>
                                    <input
                                          id="url"
                                          type="url"
                                          name="url"
                                          onChange={handleChange}
                                          required={true}
                                    />
                                    <div className="pictureContainer"></div>
                              </section>
                        </form>
                  </div>
            </div>
      )
}

export default Onboarding
