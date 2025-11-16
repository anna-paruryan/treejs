import {navLinks} from "../constants";

export const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo"/>
                <ul>
                    {navLinks.map(({ label, href, id }) => (
                        <li key={id || href || label}>
                            <a href={href || (id ? `#${id}` : `/${label.toLowerCase()}`)}>{label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="search"/>
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart"/>
                    </button>
                </div>
            </nav>
        </header>
    );
};
