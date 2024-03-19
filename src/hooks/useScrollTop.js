import { useEffect } from 'react';

const useScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  } ,[]);
}
export const useScrollTopAlways = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
}

export default useScrollTop;