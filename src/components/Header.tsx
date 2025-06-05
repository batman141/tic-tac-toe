import ticTacToe from "../assets/images/ticTacToe.png";
const Header = () => {
  return (
    <div className="headerContainer">
      <img src={ticTacToe} alt="Tic Tac Toe" height={50} width={50} />
      <header>
        <span>
          <strong>Tic Tac Toe</strong>
        </span>
      </header>
    </div>
  );
};

export default Header;
