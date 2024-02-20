import { useCallback, useState } from 'react';

function useInputs(initialForm) {
  
  const [form, setForm] = useState(initialForm);

  const onClick = useCallback(e => {
    const { name, id } = e.target;
    setForm(form => ({ ...form, [name]: id }));
  }, [setForm]);

  return [form, onClick];
}

export default useInputs;