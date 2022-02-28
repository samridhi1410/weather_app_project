import axios from "axios";

let apiid = '35e7a04a8b4d73b0c0ab8d36a39c2bba';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&';

export const getData=async (id)=>{
    console.log(id)

    try{
    let {data}=await axios.get(`${url}id=${id}&appid=${apiid}`);
    console.log(data);
    return data;
    }
    catch(err)
    {
        alert("error bhai ji")
    }
}