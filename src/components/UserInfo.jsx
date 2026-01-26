import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Группа: {user.group}</p>
    </div>
  );
};

export default UserInfo;
