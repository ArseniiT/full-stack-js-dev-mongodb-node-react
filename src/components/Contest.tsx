import { useEffect, useState } from 'react';
import { fetchContest } from '../api-client';

function Contest({ initialContest }) {
    let [contest, setContest] = useState(initialContest);

    return (
        <div className='contest'>
            <div className='title'>Contest Description</div>
            <div className='description'>{contest?.description}</div>
        </div>
    )
}

export default Contest;