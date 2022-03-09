import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            fName: "",
            lName: "",
            dob: "",
            email: "",
            address: "",
        }
    }
    handleInput = ({ target }) => {
        let { name, value } = target;
        this.setState({
            [name]: value
        })
    }
    _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })
    }
    _prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        })
    }
    previousButton = () => {
        let currentStep = this.state.currentStep;
        if(currentStep !== 1) {
            return (
            <button onClick={this._prev}>Back</button> 
                )
        }
            return null;
    }
    nextButton = () => {
        let currentStep = this.state.currentStep;
        if(currentStep < 3) {
            return (
                <button onClick={this._next} className="active">Next</button>
            )
        } else if(currentStep === 3) {
            return (
                <button className="active">Submit</button>
            )
        }
        return null;
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        let currentStep = this.state.currentStep;
        return (
        <>
        <section>
            <div className="image">
                <img src="/images/sidebar.jpg" />
            </div>
            <div className="input-form">
                <div className="form-content">
                    <ul>
                        <li><span className={currentStep === 1 ? "active": "" || currentStep === 2 ? "complete" : "" || currentStep === 3 ? "complete" : ""}>1</span>Sign Up</li>
                        <li><span className={currentStep === 2 ? "active": "" || currentStep === 3 ? "complete" : ""}>2</span>Message</li>
                        <li><span className={currentStep === 3 ? "active": "" }>3</span>Checkbox</li>
                    </ul>
                    <hr className="line"/>
                    <span className="steps">Step {this.state.currentStep}/3</span>
                    <h2>Sign Up</h2>
                    <form onSubmit={this.handleSubmit}>
                        <Step1 currentStep = {this.state.currentStep} handleInput={this.handleInput} />
                        <Step2 currentStep = {this.state.currentStep} handleInput={this.handleInput} />
                        <Step3 currentStep = {this.state.currentStep} handleInput={this.handleInput} />
                    </form>
                    <hr/>
                    <div className="buttons">
                        {this.previousButton()}
                        {this.nextButton()}
                    </div>
                </div>
            </div>
        </section>
        </>
        )
    }
}

export default Form;