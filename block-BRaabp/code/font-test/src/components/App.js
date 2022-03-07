import React from "react";
import languages from "./data";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            fontSize: 16,
        }
    }
    onHandleChange = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }
    onFontChange = (event) => {
        this.setState({
            fontSize: event.target.value
        })
    }
    render() {
        let size = this.state.fontSize + "px";
        return (
            <>
            <div className="font">
            <input value={this.state.inputText} onChange={this.onHandleChange} type="text" placeholder="Type Something" />
            <input value={this.state.fontSize} min="10" max="100" onChange={this.onFontChange} type="range" />
            </div>
            <section className="grid">
            {
                languages.map((data) => (
                    
                <div key={data} className="box">
                <h1>{data}</h1>
                <div>
                <h2 style={{fontFamily: data ,fontSize: size}}>{this.state.inputText}</h2>
                </div>
                </div>
                ))
            }
            </section>
            </>
        )
    }
}

export default App;