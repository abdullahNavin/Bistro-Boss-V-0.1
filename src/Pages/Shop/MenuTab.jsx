import React from 'react';
import ShopMenu from './ShopMenu';

const MenuTab = ({category}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                category.map(menuItem => <ShopMenu key={menuItem._id} items={menuItem} />)
            }
        </div>
    );
};

export default MenuTab;