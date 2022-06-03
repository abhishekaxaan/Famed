import React from 'react'
import { useState } from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {
      const [formData, setFormData] = useState({
            userID: '',
            firstName: '',
            middleName: '',
            lastName: '',
            dobDay: '',
            dobMonth: '',
            dobYear: '',
            genderIdentity: 'male',
            showGender: '',
            url: '',
      })

      const handleSubmit = () => {
            console.log('onboarding submitted successfully')
      }

      const handleChange = (e) => {
            console.log('e', e)
            const value =
                  e.target.type === 'checkbox'
                        ? e.target.checked
                        : e.target.value
            const name = e.target.name
            console.log('value' + value, 'name' + name)

            setFormData((prevState) => ({
                  ...prevState,
                  [name]: value,
            }))
      }

      console.log(formData)

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
                                                value={formData.firstName}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="middleName"
                                                type="text"
                                                name="middleName"
                                                placeholder="Middle Name (optional)"
                                                required={false}
                                                value={formData.middleName}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="lastName"
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                required={true}
                                                value={formData.lastName}
                                                onChange={handleChange}
                                          />
                                    </div>
                                    <label>Birthday</label>
                                    <div className="dob">
                                          <input
                                                id="dobDay"
                                                type="number"
                                                name="dobDay"
                                                placeholder="DD"
                                                required={true}
                                                value={formData.dobDay}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="dobMonth"
                                                type="number"
                                                name="dobMonth"
                                                placeholder="MM"
                                                required={true}
                                                value={formData.dobMonth}
                                                onChange={handleChange}
                                          />
                                          <input
                                                id="dobYear"
                                                type="number"
                                                name="dobYear"
                                                placeholder="YYYY"
                                                required={true}
                                                value={formData.dobYear}
                                                onChange={handleChange}
                                          />
                                    </div>
                                    <label>Gender</label>
                                    <div className="gender">
                                          <input
                                                id="maleGenderIdentity"
                                                type="radio"
                                                name="genderIdentity"
                                                value="male"
                                                onChange={handleChange}
                                                checked={
                                                      formData.genderIdentity ===
                                                      'male'
                                                }
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
                                                checked={
                                                      formData.genderIdentity ===
                                                      'female'
                                                }
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
                                                checked={
                                                      formData.genderIdentity ===
                                                      'trans'
                                                }
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
                                                checked={formData.showGender}
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
                                    <div className="pictureContainer">
                                          <img src={formData.url} alt="" />
                                    </div>
                              </section>
                        </form>
                  </div>
            </div>
      )
}

export default Onboarding
