import { useMemo, useState } from "react";
import UserCard from "./UserCard";
import NewUserModal from "./NewUserModal";
import userData from "../../mock/user_data.json";
import ButtonGroup from "../ui/ButtonGroup";
import { Button, Input } from "../ui";
import { useNavigate } from "react-router-dom";

function UsersList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(userData);
  const [userModal, setUserModal] = useState({
    open: false,
    user: {},
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [viewOnly, setViewOnly] = useState(false);

  const closeModal = () => {
    setUserModal({
      open: false,
      user: {},
    });
  };

  const openModal = (user) => {
    setUserModal({
      open: true,
      user,
    });
  };

  const onSave = (user) => {
    if (user.id) {
      const index = users.findIndex((u) => u.id === user.id);
      users[index] = user;
      setUsers([...users]);
    } else {
      setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
    }
    closeModal();
  };

  // const onDelete = (id) => {
  //   setUsers((prev) => prev.filter((user) => user.id !== id));
  // };

  // const onEdit = (id) => {
  //   const user = users.find((user) => user.id === id);
  //   setViewOnly(false);
  //   if (user) {
  //     openModal(user);
  //   }
  // };

  const onView = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      openModal(user);
      setViewOnly(true);
    }
  };

  const handleInput = (event) => {
    const searchTerm = event.target.value;

    let searchTimeout = setTimeout(() => {
      setSearchTerm(searchTerm);
    }, 400);

    clearTimeout(searchTimeout);
  };

  const userCards = useMemo(() => {
    return users
      .splice(0, 6)
      .filter((user) => {
        if (!searchTerm) return true;
        return user.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      .map((user) => (
        <div
          key={user.id}
          // onClick={() => navigate(`idea/${user.id}`)}
          onClick={() => navigate(`idea/1234`)}
        >
          <UserCard {...user} onView={onView} />
        </div>
      ));
  }, [users, searchTerm]);

  return (
    <div>
      <section className="mb-10 pb-10">
        <div className="flex justify-between items-center mb-5 pb-2 border-b border-b-primary">
          <h1 className="text-3xl font-bold ">Released</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 rounded md:grid-cols-2 lg:xl:grid-cols-3 ">
          {[1, 2, 3].map((item, index) => (
            <div
              className="p-7 flex justify-between group relative rounded-lg border border-gray-50 hover:bg-slate-50 shadow cursor-pointer transition-all ease-in-out delay-50 w-max-[300px]"
              key={index}
            >
              <p>Version 1.0.0 - 1st Jan 2021</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 pb-10">
        <div className="flex justify-between items-center mb-5 pb-2 border-b border-b-primary">
          <h1 className="text-3xl font-bold ">Scheduled</h1>

          <div className="flex items-center justify-center flex-6 gap-4">
            <Input type="text" placeholder="Search" handleInput={handleInput} />
            <Button title="Add New" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 rounded md:grid-cols-2 lg:xl:grid-cols-3 ">
          {userCards}
        </div>
      </section>

      <section className="mb-10 pb-10">
        <div className="flex justify-between items-center mb-5 pb-2 border-b border-b-primary">
          <h1 className="text-3xl font-bold ">Ideas</h1>

          <ButtonGroup list={["New", "Updated", "Voted"]} />
        </div>

        <div className="grid grid-cols-1 gap-4 rounded md:grid-cols-2 lg:xl:grid-cols-3 ">
          {userCards}
        </div>
      </section>

      <NewUserModal
        open={userModal.open}
        onClose={closeModal}
        onSave={onSave}
        data={userModal.user}
        title={
          userModal.user.id
            ? (viewOnly && "View User") || "Edit User"
            : "Add New User"
        }
        viewOnly={viewOnly}
      />
    </div>
  );
}

export default UsersList;
