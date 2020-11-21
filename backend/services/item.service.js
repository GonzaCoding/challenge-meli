'use strict';

const fetch = require('node-fetch');

const ItemService = {
    search: async function (query) {
        const searchString = query.q;
        
        if(searchString && searchString !== '') {
            const queryURL = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(searchString)}`;

            let response = await fetch(queryURL);
            let data = await response.json();

            if(data.results.length > 0) {
                let items = [];
                for (let i = 0; i < 4; i++) {
                    items.push({
                        id: data.results[i].id,
                        title: data.results[i].title,
                        price: {
                            currency: data.results[i].currency_id,
                            amount: Math.trunc(data.results[i].price),
                            decimals: parseFloat((data.results[i].price % 1).toFixed(2)),
                        },
                        picture: data.results[i].thumbnail,
                        condition: data.results[i].attributes[1].value_name,
                        free_shipping: data.results[i].shipping.free_shipping,
                    });
                }

                // Las categorías pueden venir dentro de "filter" o de "available_filters", se debe tomar desde donde corresponda
                let categories = [];
                let categorySearch = data.filters.find(element => element.id === "category");
                if (categorySearch) {
                    categories = categorySearch.values[0].path_from_root.map(category => category.name);
                } else {
                    categorySearch = data.available_filters.find(element => element.id === "category");
                    categories = categorySearch.values.map(category => category.name);
                }

                const result = {
                    status: 200,
                    data: {
                        author: {
                            name: "Gonzalo",
                            lastname: "Iglesias",
                        },
                        categories,
                        items,
                    }  
                }

                return result;

            } else {
                
                return {
                    status: 404,
                    data: {
                        message: "No se encontraron resultados"
                    }
                }

            }
            
        } else { 
            
            return {
                status: 400,
                data: {
                    message: "Faltan parámetros de búsqueda",
                } 
            }
        
        }
     
    },

    getItem: async function(id) {
        const queryURL = `https://api.mercadolibre.com/items/${id}`;
        
        let response = await fetch(queryURL);
        let data = await response.json();

        if(data.error) {

            return {
                status: 404,
                data: {
                    message: "El artículo no existe"
                }
            }

        } else {

            const result = {
                author: {
                    name: "Gonzalo",
                    lastname: "Iglesias",
                },
                item: {
                    id: data.id,
                    title: data.title,
                    price: {
                        currency: data.currency_id,
                        amount: Math.trunc(data.price),
                        decimals: parseFloat((data.price % 1).toFixed(2)),
                    },
                    picture: data.pictures[0].secure_url,
                    condition: data.attributes[1].value_name,
                    free_shipping: data.shipping.free_shipping,
                    sold_quantity: data.sold_quantity,
                    description: "",
                },
            }
    
            response = await fetch(queryURL + "/description");
            data = await response.json();
    
            result.description = data.plain_text;
    
            return {
                status: 200,
                data: result
            };
        }
        
    }
}

module.exports = ItemService;