import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            zip: "",
            city: "",
            country: "",
            checked: false,
            errors: {
                address: "",
            }
        }
    }
    handleInput = ({ target }) => {
        let {name, value } = target;
        let errors = this.state.errors;
        errors.address = (name === "address") && (value.length < 8) ? "You need to enter at-least 8 Characters" : "";
        this.setState({
            errors, [name]: value
        });
    }
    handleCheked = ({target}) => {
        let {name, checked} = target;
        this.setState({
            [name]: checked
        })
    }
    render() {
        let { address } = this.state.errors;
        return (
            <>
            <header>
            <h1>📑Learning About Forms</h1>
            <h3>Controlled vs Uncontrolled Component</h3>
            </header>
            <h2>Controlled Component</h2>
            <section>
                <div className="shipping">
                    <h2>Shipping Address</h2>
                    <form>
                        <label htmlFor="address" className={address && "er"}>Address</label>
                        <input type="text" name="address" id="address" placeholder="e.g. New Delhi Vasant Vihar" value={this.state.address} onChange={this.handleInput} className={address && "error"} />
                        <span>{address}</span>
                        <label htmlFor="zip">ZIP/POSTAL CODE</label>
                        <input type="number" name="zip" id="zip" placeholder="e.g. 176057" value={this.state.zip} onChange={this.handleInput} />
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" placeholder="e.g. New Delhi" value={this.state.city} onChange={this.handleInput} />
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" placeholder="e.g. India" value={this.state.country} onChange={this.handleInput} />
                    </form>
                </div>
                <div className="billing">
                    <h2>Billing Address</h2>
                    <form>
                        <div className="ship-bill">
                        <input type="checkbox" name="checked" id="checked" onChange={this.handleCheked} checked={this.state.checked} /><label>Same as Shipping Address</label>
                        </div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" placeholder="e.g. New Delhi Vasant Vihar" value={this.state.checked ? this.state.address : ""} onChange={this.handleInput} />
                        <label htmlFor="zip">ZIP/POSTAL CODE</label>
                        <input type="number" name="zip" id="zip" placeholder="e.g. 176057" value={this.state.checked ? this.state.zip : "" } onChange={this.handleInput} />
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" placeholder="e.g. New Delhi" value={this.state.checked ? this.state.city : "" } onChange={this.handleInput} />
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" placeholder="e.g. India" value={this.state.checked ? this.state.country : ""} />
                    </form>
                </div>
            </section>
            </>
        )
    }
}

export default App;