import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTopAlways = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
}
export const useScrollTopLocation = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}
export const useScrollTopRefresh = () => {
  useEffect(() => { 
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
}