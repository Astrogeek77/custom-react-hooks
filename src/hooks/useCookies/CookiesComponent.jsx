import useCookie from './useCookie';

let token = 'hello world';

const CookiesComponent = () => {
  const [userToken, setUserToken, deleteUserToken] = useCookie(
    'useCookies Token',
    'Hello-World'
  );

  return (
    <div>
      <p>{userToken}</p>
      <button
        onClick={() =>
          setUserToken("Bye-World")
        }
      >
        Change token
      </button>
      <button onClick={() => deleteUserToken()}>Delete token</button>
    </div>
  );
};

export default CookiesComponent;
