import axios from "axios"
import { API_SERVER_URL } from "./public-config"

export const fetchContestList = async () => {
    const res = await axios.get(`${API_SERVER_URL}/api/contests`);
    return res.data.contests;
}

export const fetchContest = async (contestId) => {
    const res = await axios.get(`${API_SERVER_URL}/api/contest/${contestId}`);
    return res.data.contest;
}