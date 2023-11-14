import axios from 'axios'
import { API_SERVER_URL } from './public-config'

export const fetchContestList = async () => {
    const res = await axios.get(`${API_SERVER_URL}/api/contests`);
    return res.data.contests;
}

export const fetchContest = async (contestId) => {
    const res = await axios.get(`${API_SERVER_URL}/api/contest/${contestId}`);
    return res.data.contest;
}

export const addNewNameToContest = async ({contestId, newName}) => {
    const res = await axios.post(
        `${API_SERVER_URL}/api/contest/${contestId}`, {
            newName
        }
    );
    return res.data.updatedContest;
}