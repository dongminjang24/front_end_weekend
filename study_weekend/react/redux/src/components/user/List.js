import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user);

  const onDeleteUser = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: { id },
    });
  };
  return (
    <div>
      {userList.length === 0 ? (
        <p>등록된 사용자가 없습니다</p>
      ) : (
        userList.map((user, index) => (
          <div key={user.id}>
            {index + 1}.{user.name}
            <button onClick={() => onDeleteUser(user.id)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
