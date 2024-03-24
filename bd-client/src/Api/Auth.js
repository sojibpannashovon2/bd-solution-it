//Get user specific role

export const getRole = async (email) => {
  const jwtToken = localStorage.getItem("token");

  if (!jwtToken) {
    throw new Error("JWT token not found in localStorage");
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to fetch user role: ${errorMessage}`);
  }

  const user = await response.json();
  return user?.role;
};
