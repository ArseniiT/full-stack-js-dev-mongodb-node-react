import ReactDOMServer from 'react-dom/server';
import { fetchContest, fetchContestList } from '../api-client';

import App from '../components/App';

const serverRender = async (req) => {
    const { contestId } = req.params;

    const initialData = contestId ?
    {
        currentContest: await fetchContest(contestId),

    } :
    {
        contest: await fetchContestList(),

    };

    const initialMarkUp = ReactDOMServer.renderToString(
        <App initialData={initialData} />
    )
    return { initialMarkUp, initialData };
}

export default serverRender;