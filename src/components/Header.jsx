const Header = () => {
  return (
    <>
      <header styke={{ backgroundColor: "Black" }}>
        <img
          src="https://www.google.com/imgres?q=logo%20tester&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F023%2F070%2F399%2Fnon_2x%2Ftester-rubber-stamp-seal-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F23070399-tester-rubber-stamp-seal-vector&docid=KWcNZYJcVvPxrM&tbnid=hQWdq_oiPNTfWM&vet=12ahUKEwiWqt62s9OOAxV0Z0EAHavrNoQQM3oECBQQAA..i&w=1565&h=980&hcb=2&ved=2ahUKEwiWqt62s9OOAxV0Z0EAHavrNoQQM3oECBQQAA"
          alt="Logo image"
        />
        <nav>
          <ul>
            {/* { cambiar elementos a por coimponentes de react-router-dom} */}
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <button> End session </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
