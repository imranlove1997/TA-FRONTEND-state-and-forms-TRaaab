import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
        };
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;

        switch (name) {
           case "username":
                errors.username = !value ? "Username is required" : value.length < 3 ? "Username must be atleast 3 characters" : "";
                break;
            case "email":
                errors.email = !value ? "Email is required" : this.validateEmail(value) ? "" : "Email is invalid";
                break;
                case "password":
                errors.password = !value ? "Password is required" : value.length < 6 ? "Password must be atleast 6 characters" : "";
                break;
                case "confirmPassword":
                errors.confirmPassword = !value ? "Confirm Password is required" : value === this.state.password ? "" : "Password is incorrect";
                break;
            default:
                break;
        }

        this.setState({errors, 
            [name]: value
        });
    }
    handleSubmit = (event) => {
        let errors = this.state.errors;
        let {username, email, password, confirmPassword} = this.state;
        event.preventDefault();
        alert(username + email + password + confirmPassword);
    }
    submitButton = () => {
        let {username, email, password, confirmPassword} = this.state;
        if(username && email && password && confirmPassword) {
           return <input type="submit" value="Submit" />
        } else {
            return <input type="submit" value="Submit" disabled/>
        }
    }
    render() {
        let {username, email, password, confirmPassword} = this.state.errors;
        return (
            <>
            <h2>Multiple Input Form</h2>
            <form>
            <label htmlFor="text-input">Text Input</label>
                <input type="text" id="text-input"/>
            
            <label htmlFor="date-input">Date Input</label>
            <input type="date" id="date-input" />
            
            <label htmlFor="file-input">File Input</label>
            <input type="file" id="file-input" />
            
            <label htmlFor="disabled-input">Disabled Input</label>
            <input type="text" id="disabled-input" disabled />
            
            <label htmlFor="textarea">Textarea </label>
            <textarea id="textarea"></textarea>
           
            <label htmlFor="textarea-disabled">Textarea Disbaled</label>
            <textarea id="textarea" disabled></textarea>
            </form>
            <hr/>
            <h2>Validation</h2>
            <div className="validation-form">
                <h3>Register With Us</h3>
                <form>
                    <label htmlFor="username" className={username && "error-label"}>Username</label>
                    <input type="name" name="username" id="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleInput} className={username && "error"} />
                    <span>{username}</span>

                    <label htmlFor="email" className={email && "error-label"}>Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleInput} className={email && "error-label"} />
                    <span>{email}</span>

                    <label htmlFor="password" className={password && "error-label"}>Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInput} className={password && "error-label"} />
                    <span>{password}</span>

                    <label htmlFor="confirm" className={confirmPassword && "error-label"}>Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirm" placeholder="Confrim Password" value={this.state.confirmPassword} onChange={this.handleInput} className={confirmPassword && "error-label"} />
                    <span>{confirmPassword}</span>

                    <this.submitButton />
                </form>
            </div>
            </>
        )
    }
}

export default App;