import axios from 'axios';

export const Service = () => {
  const service = axios.create({
    baseURL: 'https://cards-against-team-outing.herokuapp.com/',
    timeout: 15000,
  });

  return service;
};

