  
import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-challenge-7a25a.cloudfunctions.net/app'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;




//http://localhost:5001/challenge-7a25a/us-central1/app