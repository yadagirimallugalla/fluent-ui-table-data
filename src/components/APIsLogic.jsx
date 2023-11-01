const BASE_URL = "https://dummyjson.com/users";

export const fetchEmployeesData = async () => {
  try {
    const response = await fetch(`${BASE_URL}?limit=100`);
    const data = await response.json();
    return data.users;
  } catch (err) {
    console.error("Error Fetching Employees Data: ", err);
    return [];
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`, {
      method: "DELETE",
    });
    console.log("delete user response ", response);
    if (response.status === 200) {
      console.log(`User with ID ${userId} deleted successfully.`);
    } else {
      console.error(`Failed to delete user with ID ${userId}.`);
    }
  } catch (err) {
    console.error("Error deleting user: ", err);
  }
};

export const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (err) {
    console.error("Error fetching user data: ", err);
    return null;
  }
};
