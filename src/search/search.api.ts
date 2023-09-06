import {instance} from "../common/api";


export const apiSearchBooks = {
    getSearchBooks(searchTerm: string) {
        return  instance.get(`?q=${searchTerm}`);
    },

};
