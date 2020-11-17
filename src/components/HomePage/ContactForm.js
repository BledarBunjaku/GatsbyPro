import { Component } from "react"
import React from 'react'
import './Style/ContactForm.scss'





class ContactForm extends Component {

    state = {
        fName: '',
        lNAme: '',
        email: '',
        select: 'Problem1',
        message: ''
    }

    handleNameChange = e => (
        this.setState({ fName: e.target.value })
    )

    handleLasnNameChange = e => (
        this.setState({ lName: e.target.value })
    )
    handleEmailChange = e => (
        this.setState({ email: e.target.value })
    )
    handleSelectChange = e => (
        this.setState({ select: e.target.value })
    )
    handleMessageChange = e => (
        this.setState({ message: e.target.value })

    )

    handleSubmit = e => {
        alert(` Name:${this.state.fName} LastName:${this.state.lName} Email:${this.state.email} Selection:${this.state.select}  Message:${this.state.message}`)
        e.preventDefault()
    }


    getWPdata = (e) => {

    }





    render() {
        return (

            <div className='get-touch mt-5 pb-5'>
                <h2 className='text-center' >Facing Problem?<br /><strong>Lets Get In Touch Now</strong> </h2>

                <div className='row contact-form w-100 rounded'>

                    <form className='form mx-auto ' onSubmit={this.handleSubmit}>
                        <div class="form-row  ">
                            <div class="col-md-6 mb-3">
                                <label for="first-name">First Name</label>
                                <input type="text" class="form-control rounded-0 border-top-0 border-left-0 border-right-0" id="first-name" placeholder="First name"
                                    value={this.state.fName}
                                    onChange={this.handleNameChange}
                                    required />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="last-name">Last Name</label>
                                <input type="text" class="form-control rounded-0 border-top-0 border-left-0 border-right-0" id="last-name" placeholder="Last name"
                                    value={this.state.lName}
                                    onChange={this.handleLasnNameChange}
                                    required />
                            </div>
                            <div class="col-md-12 mb-3">

                                <label for="email">Your Email Adress</label>
                                <input type="email" class="form-control rounded-0 border-top-0 border-left-0 border-right-0" id="email" placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="select">Which Related Problem You Are Facing?</label>
                                <select class="form-control rounded-0 border-top-0 border-left-0 border-right-0" id="select" placeholder='Select one of problems'
                                    value={this.state.select}
                                    onChange={this.handleSelectChange}>
                                    <option>Problem1</option>
                                    <option>Problem2</option>
                                </select>
                            </div>

                            <div class="col-md-12 mb-3">

                                <div class="form-group ">
                                    <label for="text-message">Type Your Message</label>
                                    <textarea class="form-control rounded-0 border-top-0 border-left-0 border-right-0" id="text-message" rows="4"
                                        value={this.state.message}
                                        onChange={this.handleMessageChange} />
                                </div>

                                <div class="col-md-12 mb-3 mr-0 ">
                                    <button type="submit" class="px-3 button btn ">Our Works</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        )
    }

}

export default ContactForm;


