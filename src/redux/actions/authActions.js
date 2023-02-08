export const loginUser = (username) => ({
  type: "LOGIN",
  payload: { username, isLoggedIn: true },
});

export const logoutUser = () => ({
  type: "LOGOUT",
  payload: { username:"", isLoggedIn: false },
});


