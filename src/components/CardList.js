import React, { Fragment } from 'react'; 
// use Fragment 
// https://ru.reactjs.org/docs/fragments.html
// it helps you keep your code more cleaner
import Card from './Card';

const CardList = ({ robots }) => (
    <Fragment>
        {robots.map(({ id, name, email }) => (
            // if you use desctruction, use it 100%
            <Card 
                key={id} 
                // id is a uniq value, so you can use it as a key, and omit unnessesaries values
                id={id} 
                name={name} 
                email={email} 
            /> 
        ))
        }
    </Fragment>
);

export default CardList;