import React from 'react';
import useForm from './useForm';
import validateForm from './validateForm';

const ContactForm = (props) => {
    const {handleChange, values, handleSubmit, errors} = useForm(props.submitForm, validateForm);

    return(
        <section className="contact-container">
            <main className="contact-card" >

            <div className="header">
                <h1 className="headerTitle">Contact Us</h1>
                <p className="tagLine userText" >We'd love to hear from you</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="labelName">
                        Name
                        <input 
                            className="userText" id="userName" 
                            autoComplete="off" placeholder="Enter your full name" 
                            type="text"
                            name="fullName" 
                            value={values.fullName} 
                            onChange={handleChange}
                        />
                        {errors.userName && <span className="errorCheck">{errors.userName}</span>}
                    </label>
                </div>

                <div className="input-container">
                    <label className="labelName">
                        Email Address
                        <input 
                            className="userText" id="mailAdd"  
                            autoComplete="off" type="email"
                            placeholder="Enter your email address" 
                            name="mailID" 
                            value={values.mailID} 
                            onChange={handleChange}
                        />
                        {errors.email && <span className="errorCheck">{errors.email}</span>}
                    </label>
                </div>

                <div className="input-container">
                    <label className="labelName">
                        Phone Number
                        <input 
                            className="userText" id="phoneNumb"  
                            autoComplete="off" type="number"
                            placeholder="Enter your mobile number" 
                            name="mobileNumber" 
                            value={values.mobileNumber}
                            onChange={handleChange}
                        />
                        {errors.phNumb && <span className="errorCheck">{errors.phNumb}</span>}
                    </label>
                </div>

                <div className="input-container">
                    <label className="labelName">
                        Comments
                        <textarea 
                            className="userText"  id="comments"  
                            autoComplete="off" cols="20" 
                            rows="5" spellCheck="false"
                            placeholder="Enter your comments" 
                            name="userComments"
                            value={values.userComments}
                            onChange={handleChange} >
                        </textarea>
                        {errors.comment && <span className="errorCheck">{errors.comment}</span>}
                    </label>
                </div>

                <div className="submitBtn">
                    <button type="submit"> SUBMIT </button>
                </div>
            </form>
            </main>
        </section>
    )
}

export default ContactForm;
