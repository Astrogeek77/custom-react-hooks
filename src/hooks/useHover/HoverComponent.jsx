import useHover from './useHover'

export default function HoverComponent() {
  const [hoverRef, isHovered] = useHover();

  return <div ref={hoverRef}>{isHovered ? '😁' : '☹️'}</div>;
}
