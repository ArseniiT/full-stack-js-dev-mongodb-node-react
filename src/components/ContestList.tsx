import ContestPreview from "./ContestPreview";
import { useEffect, useState } from 'react';
import { fetchContests } from "../api-client";

function ContestList({ initialContests }) {
    let [contests, setContests] = useState(initialContests);

    useEffect(() => {
        fetchContests()
            .then((data) => {
                setContests(data.contests)
            });
    }, []);

    return (
        <div className="contest-list">
            {contests?.map((contest) => {
                console.log(contest)
                return (
                    <ContestPreview key={contest.id} contest={contest} />
                )
            })}
        </div>
    );
}

export default ContestList;