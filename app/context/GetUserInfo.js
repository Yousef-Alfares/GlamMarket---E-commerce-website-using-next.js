const GetUserInfo = async (token) => {
  const fetchUser = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await fetchUser.json();

  return user;
};

export default GetUserInfo;
