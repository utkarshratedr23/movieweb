/* eslint-disable no-unused-vars */
import axios from "axios";
const BASE_URL="https://api.themoviedb.org/3";
const TMBD_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmJlMGJiNTkyY2ZkNjVlYWI5NzBkNzhhMmE0MGRmZiIsInN1YiI6IjY1NzVjNzY5NGJmYTU0MDBhYmVlYzJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kH4jaYviRg7loKaDRBRT7S3PYrs8gJUi3VZwlqOxZM"
const headers={
    Authorization:"Bearer " + TMBD_TOKEN,
    accept:"application/json"
}
export const fetchDataFromApi=async (url,params)=>{
try{
  const {data}=await axios.get(BASE_URL + url,{
    headers,
    params
  })
  return data;
}
catch(err){
console.log(err);
return err;
}
}