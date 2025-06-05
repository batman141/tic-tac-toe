import ticTacToe from "../assets/images/ticTacToe.png";
const Header = () => {
  return (
    <>
      <img src={ticTacToe} alt="Tic Tac Toe" height={50} width={50} />
      <header>Tic Tac Toe</header>
    </>
  );
};

export default Header;
