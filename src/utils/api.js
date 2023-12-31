import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_URL,
});

export const getWorldcupData = (round, gameId) => {
  return instance.get(`/api/v1/etc/worldcup?round=${round}&gameId=${gameId}`);
};

export const getExamData = (examId) => {
  return instance.get(`/api/v1/etc/exam?examId=${examId}`);
};

export const getExamScoreData = (examId, answers) => {
  return instance.post(`/api/v1/etc/exam/score?examId=${examId}`, {answers: answers});
};