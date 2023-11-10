import { useState, useEffect } from 'react';
import Header from './Header';
import ContestList from './ContestList';


const App = ({ initialData }) => {
    const [page, setPage] = useState('contestList');

    const navigateToContest = () => {
        setPage('contest')
    }

    const pageContent = () => {
        switch(page){
            case 'contestList':
                return <ContestList initialContests={initialData.contests} onContestClick={navigateToContest} />;
            case 'contest':
                return '........'
        }
    }

    return (
        <div className='container'>
            <Header msg='Naming Contests' />
            {pageContent()}
        </div>
    )
}

export default App;