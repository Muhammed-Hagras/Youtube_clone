import axios from "axios";

const BASEURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "738a8e2b5amsha0c17e899d8de86p126771jsn05f30db4567e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASEURL}/${url}`, options);
  return data;
};
