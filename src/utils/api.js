import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_URL,
});

export const getWorldcupData = (round, gameId) => {
  return instance.get(`/api/v1/etc/worldcup?round=${round}&gameId=${gameId}`);
};

export const postWorldcupResultData = (id, gameId) => {
  return instance.post(`/api/v1/etc/worldcup/result?id=${id}&gameId=${gameId}`);
};
export const getWorldcupResultData = (gameId) => {
  return instance.get(`/api/v1/etc/worldcup/result?gameId=${gameId}`);
};

export const getWorldcupResultDataRe = (gameId) => {
  return instance.get(`/api/v1/etc/worldcup/result?gameId=${gameId}`);
};

export const getExamData = (examId) => {
  return instance.get(`/api/v1/etc/exam?examId=${examId}`);
};

export const getExamScoreData = (examId, answers) => {
  return instance.post(`/api/v1/etc/exam/score?examId=${examId}`, {answers: answers});
};

export const getConcertData = (num) => {
  return instance.get(`/api/v1/archive?num=${num}`);
}
export const getTestData = () => {
  return instance.get(`/api/v1/etc/test`);
};
