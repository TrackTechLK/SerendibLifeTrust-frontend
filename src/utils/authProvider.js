export const authProvider = {
  login: async ({ username, password }) => {
    const request = new Request('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      localStorage.setItem('auth', JSON.stringify(auth));
    } catch (error) {
      console.log(error);
      throw new Error('Network error');
    }
  },
  checkError: async (error) => {
    const status = error.status;
    if (status === 401) {
      // Token is invalid or expired
      const auth = JSON.parse(localStorage.getItem('auth'));
      const refresh = auth.refresh;

      if (!refresh) {
        // localStorage.removeItem('access');
        throw new Error('No refresh token');
      }

      const request = new Request('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        body: JSON.stringify({ refresh }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });

      try {
        const response = await fetch(request);
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        const { access } = await response.json();
        localStorage.setItem('auth', JSON.stringify({ ...auth, access }));
      } catch (err) {
        console.log(err);
        // localStorage.removeItem('access');
        // localStorage.removeItem('refresh');
        throw new Error('Network error');
      }
    }
  },
  checkAuth: async () => {
    const { access } = JSON.parse(localStorage.getItem('auth'));
    if (!access) {
      throw new Error();
    }
  },
  logout: async () => {
    localStorage.removeItem('auth');
  },
};
