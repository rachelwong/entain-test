import type { RacesResponse } from '@/models/RaceResponse';
import axios, { isAxiosError } from 'axios'



const getRaces = async (count: number = 10): Promise<RacesResponse | undefined> => {
  try {
    const baseUrl = `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=${count}`;
    const { data } = await axios.get(baseUrl);
    console.log('get races', data.data);
    return data.data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(`Error getting race data status code: ${err.code}`);
    }
    console.error(err);
  }
}

export default getRaces;