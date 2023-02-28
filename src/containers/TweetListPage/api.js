import axios from "axios";
const TWEET_SERVICE_API_URL = "http://localhost:8000/tweet"

export default {TWEET_SERVICE_API_URL}

export const axiosClient = axios.create({
    baseURL:   `${TWEET_SERVICE_API_URL}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export const apiGetTweetList = () => {
    return axiosClient.get("/");
}