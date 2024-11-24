import React from 'react';

const ShopMenu = ({ items }) => {
    const { image, name, recipe, price } = items
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="menu" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">order now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopMenu;