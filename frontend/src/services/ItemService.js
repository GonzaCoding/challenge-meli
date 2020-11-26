import {baseURL} from '../config/api';


const ItemService = {
    search: async function (query) {
        try{
            const response = await fetch(baseURL + '/items?q=' + query);
            const data = await response.json();
            
            if(response.status !== 200) {
                return {
                    error: true,
                    message: data.message,
                }    
            }
            
            return data;

        } catch (error) {

            return error;

        }  
    },
    getItem: async function(id) {
        try{
            const response = await fetch(baseURL + '/items/' + id);
            const data = await response.json();
            
            if(response.status !== 200) {
                return {
                    error: true,
                    message: data.message,
                }    
            }
            
            return data;

        } catch (error) {

            return error;

        }  
    },
}

export default ItemService;