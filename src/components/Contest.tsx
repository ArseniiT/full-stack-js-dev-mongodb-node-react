import { useEffect, useState } from 'react';
import { fetchContest } from '../api-client';

function Contest({ initialContest, onContestListClick }) {
    let [contest, setContest] = useState(initialContest);

    useEffect(() => {
        if(!contest.names) {
            fetchContest(contest.id).then((contest) => {
                setContest(contest);
            });
        }
    }, [contest.id, contest.names]);

    const handleClickContestList = (event) => {
        event.preventDefault()
        onContestListClick()
    }

    return (
        <div className='contest'>
            <div className='title'>Contest Description</div>
            <div className='description'>{contest?.description}</div>

            <div className="title">Proposed names</div>
            <div className="body">
                {contest.names?.length > 0 ? (
                        <div className="list">
                            {contest.names.map((proposedName) => {
                                return (<div key={proposedName.id} className="item">{proposedName.name}</div>)
                            })}
                        </div>
                    ) : (
                        <div className="list">No names  proposed yet</div>
                )}
            </div>

            <a href='/' className='link' onClick={handleClickContestList}>
                Contest List
            </a>
        </div>
    )
}

export default Contest;