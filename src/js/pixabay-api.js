import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "55066757-aef92cd57a3265a375d263145";

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}