import axios from 'axios';

const API_URL = 'http://localhost:3001/api/notes';

const getAll = () => {
    return axios.get(API_URL).then(res => res.data);
}

const create = note => {
    return axios.post(API_URL, note).then(res => res.data);
}

const update = (id, note) => {
    return axios.put(`${API_URL}/${id}`, note).then(res => res.data);
}

const remove = (id) => {
    return axios.delete(`${API_URL}/${id}`).then(res => res.data);
}

export { getAll, create, update, remove };