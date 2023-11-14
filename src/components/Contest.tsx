import { useEffect, useState } from 'react';
import { addNewNameToContest, fetchContest } from '../api-client';

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

    const saveNewName = async (event) => {
        event.preventDefault();
        const newName = event.target.newName.value;
        const updatedContest = await addNewNameToContest({contestId: contest.id, newName });
        setContest(updatedContest);
    }

    return (
        <div className='contest'>
            <div className='title'>Contest Description</div>
            <div className='description'>{contest?.description}</div>

            <div className="title">Proposed names</div>
            <div className="body">
                {contest.names?.length > 0 ? (
                        <div className="list">
                            {contest.names.map((proposedName) => (
                                <div key={proposedName.id} className="item">{proposedName.name}</div>
                            ))}
                        </div>
                    ) : (
                        <div className="list">No names  proposed yet</div>
                )}
            </div>

            <div className="title">Propose a New Name</div>
            <div className="body">
                <form onSubmit={saveNewName}>
                    <input type="text" name="newName" placeholder='New Name'/>
                    <button type="submit">Save</button>
                </form>
            </div>

            <a href='/' className='link' onClick={handleClickContestList}>
                Contest List
            </a>
        </div>
    )
}

export default Contest;