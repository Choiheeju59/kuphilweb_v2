import { getIsAuthenticated } from '../utils/api';

const useAuthenticated = () => {
  const checkAuthentication = async () => {
    let token = sessionStorage.getItem('auth_token');
    try {
      const res = await getIsAuthenticated(token);
      return !!res.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return checkAuthentication;
}

export default useAuthenticated;