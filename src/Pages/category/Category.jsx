import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../News/NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const categorynews = useLoaderData()
    return (
        <div>
           { id && <h2>this  category {categorynews.length} </h2>}
            {
                categorynews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;