
import React from 'react';

const CardPhrases = ({ phrasesData }) => {
    console.log(phrasesData)
    return (
        <div className='card-phrases'>
            <h2>{ phrasesData.phrase }</h2>
            {/* <h3>Nombre del autor</h3> */}
        </div>
    );
};

export default CardPhrases;