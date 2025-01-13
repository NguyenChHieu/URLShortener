import axios from "axios"

export default axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
    
})