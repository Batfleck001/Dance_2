import axios from "axios"

const baseUrl = "http://localhost:3001/api/notes"

const getAll = () =>{
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}
const create = newobj =>{
    const req = axios.post(baseUrl,newobj)
    return req.then(res => res.data)
}
const update = (id,newobj) =>{
    const req = axios.put(`${baseUrl}/${id}`,newobj)
    return req.then(res => res.data )
}       
export default {
    getAll,     
    create,
    update
}
