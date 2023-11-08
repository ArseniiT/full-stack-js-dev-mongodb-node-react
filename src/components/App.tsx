import { useState, useEffect } from 'react';
import Header from './Header';


const App = ({ initialData }) => {
    return (
        <div className='container'>
            <Header msg='Naming Contests' />
            <div className="contest-list">
                {initialData.contests.map((contest) => {
                    return <div className="contest-preview">
                        <div className="category">{contest.categoryName}</div>
                        <div className="contest">{contest.contestName}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default App;