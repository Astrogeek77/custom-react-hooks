import useLoadScript from './useLoadScript';

const SCRIPT_TO_LOAD = 'https://code.jquery.com/jquery-3.6.1.min.js';

export default function ScriptComponent() {
  const { loading, error } = useLoadScript(SCRIPT_TO_LOAD);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return <div>{window.$(window).width()}</div>;
}
