import React from "react";
import data from "./data.json";
import Product from "./Product";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: "all",
        }
    }
    render() {
        let completeMenu = data.reduce((acc, d) => {
            if(!acc.includes(d.category)) {
                acc.push(d.category);
            }
            return acc;
        }, []);
        completeMenu.unshift("all");
        let allMenu;
        if(this.state.activeMenu === "all") {
            allMenu = data;
        } else {
            allMenu = data.filter(d => this.state.activeMenu === d.category);
        }
        console.log(allMenu);
        return (
            <>
            <ul className="menu">
                {
                    completeMenu.map((menu, i) => (
                        <li key={i} ><a className={this.state.activeMenu === menu ? "white" : ""} href="#" onClick={() => {
                            this.setState({
                                activeMenu: menu
                            })
                        }}>{menu.toUpperCase()}</a></li>
                    ))
                }
            </ul>
            <main>
                <section className="product-section">
                <Product allMenu = {allMenu} />      
                </section>
            </main>
            </>
        )
    }
}

export default Menu;