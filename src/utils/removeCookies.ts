import { destroyCookie } from 'nookies';

export const removeCookies = (cookies: string[]) => {
  cookies.forEach((cookie) => {
    destroyCookie(undefined, cookie, {
      path: '/',
    });
  });
};
