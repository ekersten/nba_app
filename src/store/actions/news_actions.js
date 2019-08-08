import axios from 'axios';

import { GET_NEWS } from '../types';
import { FIREBASEURL } from '../../utils/misc';

export function getNews() {

    return {
        type: GET_NEWS,
        payload: {
            news: 'something'
        }
    }

}