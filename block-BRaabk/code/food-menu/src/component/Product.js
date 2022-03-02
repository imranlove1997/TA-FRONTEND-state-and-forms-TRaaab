function Product(props) {
    return (
        <>
        {
            props.allMenu.map(menuu => (
                <article className="product-article" key={menuu.id}>
                    <div className="product">
                        <img src={menuu.img} alt={menuu.title} />
                    </div>
                    <div className="product-title">
                        <div className="product-price">
                            <h4>{menuu.title}</h4>
                            <h4>{menuu.price}</h4>
                            </div>
                    </div>
                </article>
            ))
        }
        </>
    )
}

export default Product;