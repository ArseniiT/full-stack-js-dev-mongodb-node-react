import ReactDOMServer from 'react-dom/server';
import { fetchContestList } from '../api-client';

import App from '../components/App';

const serverRender = async () => {
    const contests = await fetchContestList();

    const initialMarkUp = ReactDOMServer.renderToString(
        <App initialData={{ contests }} />
    )
    return { initialMarkUp, initialData: { contests } };
}

export default serverRender;