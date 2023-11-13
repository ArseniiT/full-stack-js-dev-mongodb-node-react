import ContestPreview from "./ContestPreview";
import { useEffect, useState } from 'react';
import { fetchContestList } from "../api-client";
import Header from "./Header";

function ContestList({ initialContests, onContestClick }) {
    let [contests, setContests] = useState(initialContests ?? []);

    useEffect(() => {
        if(!initialContests) {
            fetchContestList()
            .then((contests) => {
                setContests(contests)
            });
        }
    }, [initialContests]);

    return (
        <>
            <Header msg={contests?.contestName} />

            <div className="contest-list">
                {contests?.map((contest) => {
                    return (
                        <ContestPreview
                        key={contest.id}
                        contest={contest}
                        onClick={onContestClick}
                        />
                        )
                    })}
            </div>
        </>
    );
}

export default ContestList;