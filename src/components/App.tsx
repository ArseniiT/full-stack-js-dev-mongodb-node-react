import { useState, useEffect } from 'react';
import ContestList from './ContestList';
import Contest from './Contest';


const App = ({ initialData }) => {
    const [page, setPage] = useState<'contestList' | 'contest'>('contestList');
    const [currentContestId, setCurrentContestId] = useState<string | undefined>();

    const navigateToContest = (contestId) => {
        setPage('contest');
        setCurrentContestId(contestId);
    }

    const pageContent = () => {
        switch(page){
            case 'contestList':
                return <ContestList initialContests={initialData.contests} onContestClick={navigateToContest} />;
            case 'contest':
                return <Contest id={currentContestId}/>
        }
    }

    return (
        <div className='container'>
            {pageContent()}
        </div>
    )
}

export default App;