import React, { Component } from 'react';

export class ContactUS extends Component {
    render() {
        return (
            <div className="container box" style={{ width: "30rem" }}>
                <form className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputTextarea1" className="form-label">Complain Text</label>
                        <textarea type="textarea" className="form-control" rows="3" id="exampleInputTextarea1" required></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactUS;
