import axios from 'axios';

import { GET_NEWS } from '../types';
import { FIREBASEURL } from '../../utils/misc';

export function getNews() {


    const request  = axios({
        method: 'get',
        url: `${FIREBASEURL}/news.json`
    }).then(response => {
        const articles = [];
        
        for(let key in response.data) {
            articles.push({
                ...response.data[key],
                id: key
            });
        }

        return articles;
    }).catch( e => {
        return false;
    });

    return {
        type: GET_NEWS,
        payload: request
    }

}