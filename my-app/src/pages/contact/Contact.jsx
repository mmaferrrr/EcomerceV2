import React from 'react';
import './Contact.css';

function Products() {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
      
        if (!firstName || !lastName || !email || !subject) {
          alert('All fields are required.');
          return;
        }
      
        console.log("Form submitted", { firstName, lastName, email, subject });
    };
    
    return (
        <>
            <div className="form-container" style={{backgroundImage: `url('images/aboutimage.png')`}}>
                <div className="content-container">
                    <form id="contact-form" action="/form" method="POST" onSubmit={handleSubmit}> {/* Attach handleSubmit here */}
                        <div className="contact-container">
                            <h3>Contact us!</h3>
                        </div>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" />
                        <textarea id="subject" name="subject" placeholder="Enter message"></textarea>
                        <button type="submit" value="Submit" id="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Products;
