type User = {
  id: number;
  name: string;
  gender: string;
};

const users: User[] = [
  { id: 1, name: "Alice", gender: "Female" },
  { id: 2, name: "Bob", gender: "Male" },
  { id: 3, name: "Charlie", gender: "Non-binary" },
];

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sample User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
