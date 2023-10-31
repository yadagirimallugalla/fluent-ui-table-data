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
    if (response.status === 204) {
      console.log(`User with ID ${userId} deleted successfully.`);
    } else {
      console.error(`Failed to delete user with ID ${userId}.`);
    }
  } catch (err) {
    console.error("Error deleting user: ", err);
  }
};

export const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await fetch(`${BASE_URL}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUserData),
    });
    if (response.status === 200) {
      const updatedUser = await response.json();
      console.log(`User with ID ${userId} updated successfully:`, updatedUser);
    } else {
      console.error(`Failed to update user with ID ${userId}.`);
    }
  } catch (err) {
    console.error("Error updating user: ", err);
  }
};
