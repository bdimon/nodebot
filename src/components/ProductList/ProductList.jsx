import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import {useTelegram} from '../../hooks/useTelegram';
import {useCallback, useEffect, useState} from 'react';

const products = [
    {id: '1', title: 'Hat 1', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '2', title: 'Hat 2', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '3', title: 'Hat 3', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '4', title: 'Hat 4', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '5', title: 'Hat 5', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '6', title: 'Hat 6', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '7', title: 'Hat 7', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '8', title: 'Hat 8', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    {id: '9', title: 'Hat 9', price: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
];

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
}


const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tlg, queryId} = useTelegram();

    const onSendData = useCallback()
    return (
        <div>
            Product List
        </div>
    );
};

export default ProductList;