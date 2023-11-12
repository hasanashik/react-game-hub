import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7e1370e85f4a424aa097adcd69971c68'
    }
});