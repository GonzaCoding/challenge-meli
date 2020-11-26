import React from 'react';
import './ItemDetail.scss';

import formatPrice from '../../helpers/formatPrice';

const ItemDetail = ({item}) => {
    //console.log(item);
    return (
        <div className="item-detail-component">
            <div className="item-detail-component-container">
                <div className="item-detail-component-main">
                    <div className="item-detail-component-image-container">
                        <img className="item-detail-component-image" src={item.picture} alt="imagen del producto" />
                    </div>
                    
                    <div className="item-detail-component-data">
                        <div className="item-detail-component-condition">
                            <span>{item.condition === "new" ? 'Nuevo' : 'Usado'}</span>
                            <span> - </span>
                            <span>{item.sold_quantity} vendidos</span>    
                        </div>
                        <h1 className="item-detail-component-title">{item.title}</h1>
                        <div className="item-detail-component-price">
                            <span className="item-detail-component-price-amount">$ {formatPrice(item.price?.amount)}</span>
                            <span className="item-detail-component-price-decimals">{item.price?.decimals === 0 ? '00' : item.price?.decimals}</span>
                        </div>
                        
                        <button className="item-detail-component-button">Comprar</button>
                    </div>
                </div>
                <div className="item-detail-component-description">
                    <h1 className="item-detail-component-title">Descripción del producto</h1>
                    <p className="item-detail-component-description-text">{item.description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail;
