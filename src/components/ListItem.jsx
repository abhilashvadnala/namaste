import React from 'react'
import { CDN_URL } from '../utils/constnants';

const ListItem = ({card}) => {
    const imgUrl = `${CDN_URL}${card.card.info.imageId}`;
    return (
        <div className='my-2 py-2'>
            <li key={card.card.info.id}>
                <div className='flex justify-between'>
                    <div className='flex flex-col w-9/12'>
                        <h3>{card.card.info.name}</h3>
                        <p>{card.card.info.price / 100}</p>
                        <p>{card.card.info.description}</p>
                    </div>
                    <div className='w-2/12 h-26'>
                        <img className='w-full h-full object-cover rounded-lg' src={imgUrl}></img>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default ListItem;