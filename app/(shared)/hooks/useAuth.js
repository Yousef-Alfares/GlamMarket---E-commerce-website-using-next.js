const useAuth = async (userName, password) => {
  const fetchUser = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      password: password,
      expiresInMins: 20,
    }),
  });
  const user = await fetchUser.json();
  return user;
};

export default useAuth;
