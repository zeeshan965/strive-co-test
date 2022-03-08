import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const postData = (data: any) => {
    axios.post('http://127.0.0.1:8000/store', data)
}
