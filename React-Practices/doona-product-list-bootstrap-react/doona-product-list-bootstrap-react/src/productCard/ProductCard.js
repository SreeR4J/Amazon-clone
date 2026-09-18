import React from 'react';
import styles from './productCard.module.css'

function ProductCard(props) {
    const prod = props.product;
    return (
        <div className={`${styles.cardHolder} card p-2 border-0`} >
            <div className={styles.productImage} >
                <img className="h-100 w-100" src={prod.images} />
            </div>
            <div className="card-body">
                <h5 className="card-title text-wrap" style={{ height: '60px' }}>{prod.title}</h5>

                <div className="card-text fw-bolder fs-5">{`$${prod.price}`}</div>
                <button className="btn btn-primary mt-3">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;