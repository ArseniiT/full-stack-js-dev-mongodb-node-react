import { createRoot } from 'react-dom/client';
import axios from 'axios';

import { API_SERVER_URL } from './public-config';
import App from './components/App';


const container = document.getElementById('app');
const root = createRoot(container);
axios.get(`${API_SERVER_URL}/api/contests`)
    .then((res) => {
        console.log(res.data)
    })

root.render(<App />);