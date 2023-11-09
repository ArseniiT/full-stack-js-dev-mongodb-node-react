import axios from "axios"
import { API_SERVER_URL } from "./public-config"

export const fetchContests = async () => {
    const res = await axios.get(`${API_SERVER_URL}/api/contests`);
    return res.data.contests;
}