import React from "react";
import data from "./data.json";
import Modal from "./Modal";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null,
            selectIndex: null,
            modalClose: false
        }
    }

    handleMouse = (i) => {
        this.setState({
            activeIndex: i
        }
        )
    }
    handleMouseLeave = (i) => {
        this.setState({
            activeIndex: null
        })
    }
    handleSelect = (index) => {
        this.setState({
            selectIndex: index,
            modalClose: false
        })
    }
    render() {
        return (
            <>
            {
                data.map((d, i) => (
                    <div onMouseOver={() => this.handleMouse(i)} onMouseLeave={() => this.handleMouseLeave(i)}>
                    <img src={d.Images[0]} alt={d.Title} />
                    {
                        this.state.activeIndex === i ? <button onClick={() => this.handleSelect(i)}>More Info</button> : ""
                    }
                    </div>
                ))
            }
            <section className={this.state.selectIndex && !this.state.modalClose ? "display" : "hidden"}>
                <div>
                    <button onClick={() => this.setState({
                        selectIndex: null,
                        modalCose: true
                    })}></button>
                </div>
                    {
                        this.state.selectIndex ? <Modal {...data[this.state.selectIndex]} state={false} /> : ""
                    }
            </section>
            </>
        )
    }
}

export default Main;