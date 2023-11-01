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

// export const createUser = async (userData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/add`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     });
//     if (response.status === 201) {
//       const data = await response.json();
//       return data;
//     } else {
//       console.error("Failed to create a new user.");
//       return null;
//     }
//   } catch (err) {
//     console.error("Error creating a new user: ", err);
//     return null;
//   }
// };

// export const updateUser = async (userId, updatedUserData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/${userId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedUserData),
//     });
//     if (response.status === 200) {
//       const updatedUser = await response.json();
//       return updatedUser;
//     } else {
//       console.error(`Failed to update user with ID ${userId}.`);
//       return null;
//     }
//   } catch (err) {
//     console.error("Error updating user: ", err);
//     return null;
//   }
// };
