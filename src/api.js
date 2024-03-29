import axios from "axios"
const API_URL = 'http://localhost:3001'; // Express API'nizin URL'si


//APİ GET 
async function getUsers (){

    try{
        const response = await axios.get(`${API_URL}/api/users`)
        return response.data
    }
    catch(err){
        console.error('Error fetching todos:', err);
        return [];
    }
}

async function getProducts (){
    try{
        const response = await axios.get(`${API_URL}/api/products`)
        return response.data
    }
    catch(err){
        console.error('Error fetching todos:', err);
        return [];
    }
}

//APİ POST  signIn ekranı için kullanılacak post
async function addUser(newUser){
    try{
        const response = await axios.get(`${API_URL}/api/users`,newUser)
        return response.data
    }
    catch(err){
        console.error('Error adding todo:', err);
        return null;
    }
}



export {getUsers,getProducts,addUser}