import { useCallback, useMemo, useState } from 'react';

const useToggleText = (value, toggleValue) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = useCallback(() => {
    setIsToggled(!isToggled);
  }, [isToggled]);

  const text = useMemo(() => {
    return isToggled ? toggleValue : value;
  }, [isToggled, toggleValue, value]);

  return { text, toggle };
};

export default useToggleText;
