import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_URL,
});

export const getWorldcupData = (round, gameId) => {
  return instance.get(`/api/v1/etc/worldcup?round=${round}&gameId=${gameId}`);
};
