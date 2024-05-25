const BASE_URL = "https://bwd-trl-be.onrender.com";
const handleNavigateAPI = (endpoint = "")=>{
    return `${BASE_URL}${endpoint}`
}

export default handleNavigateAPI;