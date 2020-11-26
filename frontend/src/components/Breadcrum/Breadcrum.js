
import React from 'react';
import './Breadcrum.scss';

const Breadcrum = ({categories}) => {
    return (
        <div className="breadcrum-component">
            { categories && 
                categories.map(( category, index ) => {
                    const lastCategory = (categories.length === (index + 1));
                    if(!lastCategory) {
                        return (
                            <div className="breadcrum-component-container" key={category}>
                                <span>{category} </span>
                                <span className="breadcrum-component-separator"> > </span>
                            </div>
                        
                        );
                    } else {
                        return (<span key={category}><b>{category}</b></span>)
                    }
                    
                })
            }   
        </div>
    );
}

export default Breadcrum;