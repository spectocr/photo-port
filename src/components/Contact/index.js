import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' }); // where am i getting this "setFormState" func from? Like where in the code?
    const { name, email, message } = formState; // This is a good case where we can destructure the formState object into its named properties, name, email, and message.
    // JSX
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
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
                    <input type="text" defaultValue={name} onChange={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;