import ContestPreview from "./ContestPreview";
import { useEffect, useState } from 'react';
import { fetchContests } from "../api-client";

function ContestList({ initialContests, onContestClick }) {
    let [contests, setContests] = useState(initialContests);

    useEffect(() => {
        fetchContests()
            .then((contests) => {
                setContests(contests)
            });
    }, []);

    return (
        <div className="contest-list">
            {contests?.map((contest) => {
                console.log(contest)
                return (
                    <ContestPreview
                        key={contest.id}
                        contest={contest}
                        onClick={onContestClick}
                    />
                )
            })}
        </div>
    );
}

export default ContestList;