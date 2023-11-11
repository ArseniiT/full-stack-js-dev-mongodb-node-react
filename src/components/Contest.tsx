import { useEffect, useState } from 'react';
import { fetchContest } from '../api-client';

function Contest({ id }) {
    let [contest, setContest] = useState(null);

    useEffect(() => {
        fetchContest(id).then((contest)=>{
            setContest(contest);
        });
    }, [id]);

    return (
        <div className='contest'>
            <div className='title'>Contest Description</div>
            <div className='description'>{contest?.description}</div>
        </div>
    )
}

export default Contest;