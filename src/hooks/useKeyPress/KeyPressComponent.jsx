import useKeyPress from './useKeyPress'

export default function KeyPressComponent() {
  const happyPress = useKeyPress('h');

  return <div>{happyPress && '😊'}</div>;
}
