const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Christoforos Psychas</h1>
      <div className="mt-2 text-center">
        <p>
          <a
            href="mailto:christoforospsychas@gmail.com"
            className="hover:underline"
          >
            christoforospsychas@gmail.com
          </a>{" "}
          | Thessaloniki, Greece | +30 697 638 4844
        </p>
        <p>
          <a
            href="https://github.com/ChristoforosPsychas"
            className="hover:underline"
          >
            github.com/ChristoforosPsychas
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/christoforos-psychas/"
            className="hover:underline"
          >
            linkedin.com/in/christoforos-psychas
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
