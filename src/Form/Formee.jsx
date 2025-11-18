import React, { useState } from 'react'
import './Formee.css'

const Formee = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmpassword: '',
        gender: ''
    })
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; //called every time a user types or changes a form field.

        setFormData(prev => ({
            ...prev,//uses spread operator to keep  other values unchanged
            [name]: value  //update formdata using the input's name as key & the value as the new value
        }))


    }

    return (
        <div>
            <form>
                {/* name */}
                <div>
                    <input type="text"
                    name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                          />
                </div>
                {/* email */}


                <div>
                    <input type="Email"
                        name='email'
                        value={formData.email}
                        placeholder='email'
                        onChange={handleChange} />
                </div>
                {/* age */}
                <div>
                    <input type="number"
                        name='age'
                        value={formData.age}
                        placeholder=' Your age'
                        onChange={handleChange} />
                </div>
                {/* password */}
                <div>
                    <input type="password"
                        name='password'
                        value={formData.password}
                        placeholder='Your password'
                        onChange={handleChange} />
                </div>
                {/* confirmpassword */}

                <div>
                    <input type="password"
                        name='confirmpassword'
                        value={formData.confirmpassword}
                        placeholder='Confirm password'
                        onChange={handleChange} />
                </div>

                {/* gender */}

                <div>
                    {/* male */}
                    <label>
                        <input type="radio"
                            name='gender'
                            value='male'
                            checked={formData.gender === 'male'}
                            onChange={handleChange} />
                        Male
                    </label>

                    {/* female */}
                    <label>
                        <input type="radio"
                            name='gender'
                            value='female'
                            checked={formData.gender === 'female'} 
                            onChange={handleChange}/>
                        female


                    </label>
                </div>
                <button type='submit'>submit</button>






            </form>

        </div>
    )
}

export default Formee
