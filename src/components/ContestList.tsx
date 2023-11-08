import ContestPreview from "./ContestPreview";

const ContestList = ({ contests }) => {
    return (
        <div className="contest-list">
            {contests.map((contest) => {
                return <ContestPreview contest={contest} />
            })}
        </div>
    );
}

export default ContestList;