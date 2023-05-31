import React from "react";
import { useDispatch } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();
  const onAddUser = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: {
        id: Math.floor(Math.random() * 10000),
        name: e.target.user.value,
      },
    });
    e.target.user.value = "";
  };

  return (
    <form onSubmit={onAddUser}>
      <input name="user" type="text" />
      <button>추가</button>
    </form>
  );
};

export default UserForm;
