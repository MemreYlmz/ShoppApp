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
        const response = await axios.post(`${API_URL}/api/users`,newUser)
        console.log("addUser inside",response)
        return response.data
    }
    catch(err){
        console.error('Error adding todo:', err);
        return null;
    }
}

async function checkUser(userCheck){
    try{
        const response = await axios.post(`${API_URL}/api/users/checkUser`,userCheck)
        console.log(response.data)
        return response.data
    }
    catch(err){
        console.error('Error adding todo:', err);
        return null;
    }
}

//post ile signIn için backened de kullanıcı adı ve şifre gönderilecek
//backened de ki yol api/users/checkUser yolu
//Kullanıcı bulunursa  backendden gelen kullanıcı bilgileri dönecek buraya yooksa null dönecek 
//null dönerse if ile hata mesaju döndür fe de


export {getUsers,getProducts,addUser,checkUser}