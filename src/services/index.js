import axios from 'axios'
const getUrl = window.location.origin;
export default axios.create({
    baseURL: `${getUrl}`
});