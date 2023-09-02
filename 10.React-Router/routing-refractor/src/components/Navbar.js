export const Navbar = ({ setPage = () => null }) => {
  return (
    <div className="navbar">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
        alt="logo"
      />
      <nav>
        <span onClick={() => setPage("home")}>Home</span>
        <span onClick={() => setPage("list")}>List</span>
        <span onClick={() => setPage("contact")}>Contact</span>
      </nav>
    </div>
  );
};
