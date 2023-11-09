import ReactDOMServer from 'react-dom/server';
import { fetchContests } from '../api-client';

import App from '../components/App';

const serverRender = async () => {
    const contests = await fetchContests();

    const initialMarkUp = ReactDOMServer.renderToString(
        <App initialData={{ contests }} />
    )
    return { initialMarkUp };
}

export default serverRender;