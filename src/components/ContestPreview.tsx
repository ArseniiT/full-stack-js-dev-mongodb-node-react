import React from 'react';

const ContestPreview: React.FC<{ contest: any, onClick: any }> = ({ contest, onClick }) => {
    const showContest = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        onClick(contest.id);
    }
    return (
        <div className='contest-preview link' onClick={showContest}>
            <div className='category'>{contest.categoryName}</div>
            <div className='contest'>{contest.contestName}</div>
        </div>
    );
}

export default ContestPreview;