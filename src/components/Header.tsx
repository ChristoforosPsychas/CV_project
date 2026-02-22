const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Christoforos Psychas</h1>
      <div className="mt-2">
        <p>
          <a
            href="mailto:christoforospsychas@gmail.com"
            className="hover:underline"
          >
            christoforospsychas@gmail.com
          </a>{" "}
          | Thessaloniki, Greece | +30 6976384844 |{" "}
          <a
            href="https://github.com/ChristoforosPsychas"
            className="hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/christoforos-psychas/"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
