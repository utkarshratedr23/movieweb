import { useState, useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import { useSelector,useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration,getGenres } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";
function App() {
  const dispatch=useDispatch();
  const {url}=useSelector((state)=>state.home);
  console.log(url);
  useEffect(() => {
    fetchApiConfig();
  }, []); // Empty dependency array means the effect runs once when the component mounts

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res);
        const url={
          backdrop:res.images.secure_base_url + 
          "original",
          poster:res.images.secure_base_url + 
          "original",
          profile:res.images.secure_base_url + 
          "original"
        }
        dispatch(getApiConfiguration(url))
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Server responded with an error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received from the server:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
        }
      });
  };
     const genresCall=async()=>{
     let promises=[]
     let endPoints=["tv","movie"]
     let allGenres={}

     endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
     })
     const data=await Promise.all(promises);
     console.log(data);
     data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id]=item))
     })
     dispatch(getGenres(allGenres));
     }
  return (
    <BrowserRouter>
    {<Header/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path="/search/:query" element={<SearchResult />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
