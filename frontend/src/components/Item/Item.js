import React from 'react';
import {useHistory} from 'react-router-dom';
import formatPrice from '../../helpers/formatPrice';

import './Item.scss';

const Item = ({ item }) => {
    const { id, title, price, picture, condition, free_shipping, state_name } = item;

    const history = useHistory();

    const handleClick = () => {
        history.push("/items/" + id);
    }


    return (
        <article className="item-component" onClick={handleClick}>
            <div className="item-component-container">
                <div className="item-component-image-container">
                    <img className="item-component-image" src={picture} alt={title} />
                </div>
                <div className="item-component-data-container">
                    <div className="item-component-data-conditions">
                        <span className="item-component-price">$ {formatPrice(price.amount)}
                            {free_shipping &&
                                <img className="item-component-free-shipping" alt="free-shipping" src="../../assets/img/ic_shipping@2x.png" />
                            }
                        </span>

                        <div className="item-component-city">
                            <span className="item-component-city">{state_name}</span>
                        </div>

                        
                    </div>
                    <span className="item-component-title">{title}</span>
                </div>
            </div>

        </article>
    )
}


export default Item;
