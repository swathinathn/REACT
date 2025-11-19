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

    // validation

    const validation = () => {
        const newErrors = {};

        const { name, email, age, password, confirmpassword, gender } = formData;

        // name validation

        if (!name.trim()) newErrors.name = "name is required";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "Name should only contain alphabets"

        // email validation


        if (!email) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email is invalid"

        // age  validation

        if (!age) newErrors.age = "Age is required";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";

        // password  validation

        if (!password) newErrors.password = "password is required";
        else if (password.length < 6) newErrors.password = "password must be 6 charecters";

        // confirm password  validation

        if (!confirmpassword) newErrors.confirmpassword = " please confirm your password ";
        else if (password !== confirmpassword) newErrors.confirmpassword = "password do not match";


        // gender validation

        if (!gender) newErrors.gender = "Gender is required";

        return newErrors;


    }

    const handlesubmit = (e) => {
        e.preventDefault();

        const validationErrors = validation();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            setError({})
            alert("Form submitted succesfully")
            console.log('form data', formData);

            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
                confirmpassword: '',
                gender: ''
            })

        }

    }

    return (
       
            <form onSubmit={handlesubmit}>
                {/* name */}
                <div>
                    <input type="text"
                        name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                {/* email */}


                <div>
                    <input type="Email"
                        name='email'
                        value={formData.email}
                        placeholder='email'
                        onChange={handleChange} />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                {/* age */}
                <div>
                    <input type="number"
                        name='age'
                        value={formData.age}
                        placeholder=' Your age'
                        onChange={handleChange} />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}
                </div>
                {/* password */}
                <div>
                    <input type="password"
                        name='password'
                        value={formData.password}
                        placeholder='Your password'
                        onChange={handleChange} />
                    {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                </div>
                {/* confirmpassword */}

                <div>
                    <input type="password"
                        name='confirmpassword'
                        value={formData.confirmpassword}
                        placeholder='Confirm password'
                        onChange={handleChange} />
                    {error.confirmpassword && <p style={{ color: 'red' }}>{error.confirmpassword}</p>}
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
                            onChange={handleChange} />Female

                        {error.gender && <p style={{ color: 'red' }}>{error.gender}</p>}

                        


                    </label>
                </div>
                <button type='submit'>submit</button>






            </form>

       
    )
}

export default Formee
