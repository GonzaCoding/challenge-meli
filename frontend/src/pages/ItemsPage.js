import React, {useEffect, useState} from 'react';
import Layout from './Layout';
import ItemService from '../services/ItemService';
import ItemList from '../components/ItemList/ItemList';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import Breadcrum from '../components/Breadcrum/Breadcrum';

const ItemsPage = ({match, location}) => {
    
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showDetail, setShowDetail] = useState(false);
    const [breadcrum, setBreadcrum] = useState([]);
    
    useEffect(()=>{
        loadPage();
    }, [location.search, match.params.id, showDetail]);

    const loadPage = () => { 
        setIsLoading(true);
        const {id} = match.params;
    
        if(id) {
            getItem(id);
            setShowDetail(true);
        } else {
            searchItems();
        }
        setIsLoading(false);
    }

    const searchItems = async () => {
        setShowDetail(false);

        const result = await ItemService.search(location.search.substring(8));
        
        if(result.error) {
            console.log("error: " + result.message);
        } else {
            
            setItems(result.items);
            if(result.categories) {
                setBreadcrum(result.categories);
            }
            
        }
    }

    const getItem = async (id) => {
        const result = await ItemService.getItem(id);

        if(result.error) {
            console.log("error" + result.message);
        } else {
            setItems(result.item)
            setIsLoading(false);
        }
    }


    return (
        <Layout>
            { breadcrum &&
                <Breadcrum categories={breadcrum} />
            }
            { (!isLoading && !showDetail && items.length > 0) &&
                (
                    <ItemList items={items} breadcrum={breadcrum}/>
                )
            }
            { (!isLoading && showDetail) &&
                (
                    <ItemDetail item={items}/>
                )
            }
        </Layout>
    )
}

export default ItemsPage