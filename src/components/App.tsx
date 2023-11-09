import { useState, useEffect } from 'react';
import Header from './Header';
import ContestList from './ContestList';


const App = ({ initialData }) => {
    return (
        <div className='container'>
            <Header msg='Naming Contests' />
            <ContestList initialContests={initialData.contests} />
        </div>
    )
}

export default App;