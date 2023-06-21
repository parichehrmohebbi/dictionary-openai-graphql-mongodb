import { FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full py-5 px-1">
      <div className="container flex flex-wrap items-center justify-between py-3 ">
        <span className="self-center text-xl font-semibold whitespace-nowrap text-purple-400 ">
          Knowledge Dictionary
        </span>

        <div className="flex md:order-2">
          <ul className="flex flex-row  md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                className="block rounded md:p-0  dark:text-white "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FaSun className="hover:text-purple-400" />
                ) : (
                  <FaRegMoon className="hover:text-purple-400" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
