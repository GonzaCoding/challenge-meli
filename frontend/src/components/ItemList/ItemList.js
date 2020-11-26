import React from 'react';
import Item from '../Item/Item';
import Breadcrum from '../Breadcrum/Breadcrum';

import './ItemList.scss';

const ItemList = ({items}) => {
    return (
        <div className="item-list-component">
            
            <div className="item-list-items-container">
                {
                    items.map(item=>(<Item className="item-component" key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

export default ItemList;