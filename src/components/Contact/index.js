import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' }); // where am i getting this "setFormState" func from? Like where in the code?
    const { name, email, message } = formState; // This is a good case where we can destructure the formState object into its named properties, name, email, and message.
    const [errorMessage, setErrorMessage] = useState('');
    // JSX
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
            console.log('errorMessage', errorMessage);
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        ////more code will be added to get the data to submit to the backend later...
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    {errorMessage && ( //The && operator—known as the AND operator—is being used here as a short circuit. If the first value resolves to true, the second expression is evaluated.
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;