import axios from "axios";

export const getPaginatedUsers = async({ page, limit }) => {    
    try {
        const res = await axios.get(`https://api.freeapi.app/api/v1/public/randomusers?page=${page+1}&limit=${limit}`);
        console.log("Response getPaginatedUsers: ", res.data.data);
        return res.data.data;
    } catch (error) {
        console.log("Error in getPaginatedUsers: ", error?.response?.data); 
        throw error; 
    }
};