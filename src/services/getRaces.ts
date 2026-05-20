import type { RacesResponse } from '@/models/RaceResponse';
import axios from 'axios'


const getRaces = async ({ pageCount = 10 }: { pageCount: number } ): Promise<RacesResponse | null> => {
  try {
    const baseUrl = `https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=${pageCount}`;
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default getRaces;