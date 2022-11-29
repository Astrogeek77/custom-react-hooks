import { useState, useEffect } from 'react';

// a custom hook to use set cookies in ypur browser

// set cookies
const setCookie = (name, value, days, path) => {
  // a distant expirey date
  const expires = new Date(Date.now() + days * 864e5).toUTCString();

  // encodeURIComponent -  Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${path}`;
};

// get a cookie
const getCookie = (name) =>
  document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    // Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');

// function to triggeer get cookie
const useCookie = (cookieName, initialValue) => {
  const [cookieValue, setCookieValue] = useState(
    () => getCookie(cookieName) || initialValue
  );

  // for saving the cookie at the very first instance
  useEffect(() => {
    setCookie(cookieName, cookieValue, 365, '/');
  }, []);

  // update cookie
  const updateCookie = (value, days = 365, path = '/') => {
    setCookieValue(value);
    setCookie(cookieName, value, days, path);
  };

  // delete cookie
  const deleteCookie = (path = '/') => {
    updateCookie('', -1, path);
    setCookieValue(null);
  };

  return [cookieValue, updateCookie, deleteCookie];
};

export default useCookie;
