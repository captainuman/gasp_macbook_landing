import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <a href="/" aria-label="Home">
          <img src="/logo.svg" alt="Apple logo" className="h-6" />
        </a>

        <ul className="flex gap-6">
          {navLinks.map(({ label, link }) => (
            <li key={label}>
              <a
                href={link || `#${label.toLowerCase()}`}
                className="text-white hover:text-gray-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button aria-label="Search">
            <img src="/search.svg" alt="" className="h-5 w-5" />
          </button>
          <button aria-label="Cart">
            <img src="/cart.svg" alt="" className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
