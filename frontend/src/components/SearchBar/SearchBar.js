import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = () => {

    const inputRef = useRef();
    const history = useHistory();

    const handleButtonClick = () => { 
        const search = inputRef.current.value;
        history.push("/items?search=" + search);
    }

    const handleInputKeyPress = (event) => {
        if(event.charCode === 13) {
            handleButtonClick();
        }
    }

    const handleLogoClick = () => {
        history.push("/");
    }

    return (
        <div className="search-bar-component">
                <div className="search-bar-logo-container">
                    <img className="search-bar-logo-img" alt="logo" src="../../assets/img/Logo_ML.png" onClick={handleLogoClick}/>
                </div>
                <input type="text" className="search-bar-input" placeholder="Nunca dejes de buscar" ref={inputRef} onKeyPress={(event) => handleInputKeyPress(event)} aria-label="Búsqueda" />
                <div className="search-bar-button-container" onClick={handleButtonClick}>
                    <img className="search-bar-button-img" alt="search-button" src="../../assets/img/ic_Search.png" />
                </div>
        </div>
    )
}

export default SearchBar;
