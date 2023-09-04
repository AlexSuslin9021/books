import axios from "axios";

export const instance = axios.create({
    baseURL:'https://www.googleapis.com/books/v1/volumes',
    withCredentials: true,
    headers: {
        "API-KEY": "AIzaSyD7gL-j97PNQfW57vh7mynK_315CWruVug"
    }
});

