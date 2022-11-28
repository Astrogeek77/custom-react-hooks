import useMediaQuery from './useMediaQuery';

const MediaQueryComponent = () => {
  const canHover = useMediaQuery(
    // Media queries
    ['(hover: hover)'],
    // Values corresponding to the above media queries by array index
    [true],
    // Default value
    false
  );

  const canHoverClass = 'opacity-0 hover:opacity-100 transition-opacity';
  const defaultClass = 'opacity-100';

  return <button className={canHover ? canHoverClass : defaultClass}>...</button>;
}

export default MediaQueryComponent