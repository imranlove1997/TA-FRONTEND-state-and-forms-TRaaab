import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "basketball"
        }
        this.name = ["basketball", "pubg", "tiger", "phone", "laptop", "cricket"];
    }

    showImage = (e, name) => {
        e.target.classList.add("active");
        this.setState({
            active: name
        })
    }
    render() {
        return (
            <>
            {
                this.name.map((name, i) => 
                <button className={this.state.active === name ? "active" : "" } onClick={(event) => this.showImage(event, name)} key={i}>{name}</button>)
            }
            <div>
                            <img src={`assets/${this.state.active}.jpg`} alt={this.state.active} />
                        </div>
            </>
        )
    }
}

export default App;