import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>our terms and condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ab! Vero delectus enim, blanditiis, eius aliquam, debitis sit cupiditate mollitia quis velit quos quae! Mollitia dolore dicta, doloremque omnis autem modi reprehenderit corrupti natus tempora unde iusto adipisci veritatis commodi ratione quod fugit vitae quas illum qui atque ab magnam?</p>
            <p>go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;