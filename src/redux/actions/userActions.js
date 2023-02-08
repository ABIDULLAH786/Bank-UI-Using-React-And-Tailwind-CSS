export function getUser() {
  return {
    type: "GET_USER",
  };
}

export function addUser(data) {
  return {
    type: "ADD_USER",
    payload: data,
  };
}

export function editUser(data) {
  return {
    type: "EDIT_USER",
    payload: data,
  };
}

export function deleteUser(email) {
  return {
    type: "DELETE_USER",
    payload: email,
  };
}
