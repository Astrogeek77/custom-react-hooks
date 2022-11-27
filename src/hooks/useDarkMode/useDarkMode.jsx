import {useEffect} from 'react'

// a custum hook to add the dark prefrence setting and dark class to the body

const useDarkMode = () => {
  const preferDarkMode = useMediaQuery(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );

  const [enabled, setEnabled] = useLocalStorage('dark-mode', preferDarkMode);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;