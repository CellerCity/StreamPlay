import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': '9ff67ac5d3mshdb29ca1a60b2ad1p12f0d1jsn1b966fe94d9d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchfromAPI = async(url) => {
    const { data }= await axios.get(`${BASE_URL}/${url}`,
    options);

    return data;
}