import "./DiscoverPage.css"
import Card from './../components/Card'

function DiscoverPage() {

  return (
    <div className="DiscoverPage">
      <img className="HighlightedProjectImage" src="./placeholderImages/1.jpg" alt="" />
      <div className="HighlightedProject">
        <div className="Title">Crowdfund.</div>
        <div className="Details">Crowdfund is a smart contract powered crowdfunding platform that utilizes cryptocurrency for payments.</div>
        <button className="ActionButton">
          Login
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <h3>Top Projects</h3>
      <div className="CardCarousell">
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/1.jpg"}
          category={"Third World"}
          title={"Build a new school"}
          percentage={89}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Pollution"}
          title={"Clean up beach"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/3.jpg"}
          category={"Energy"}
          title={"New windpark"}
          percentage={45}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/4.jpg"}
          category={"Disaster"}
          title={"Emergency money"}
          percentage={29}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Polution"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Polution"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
      </div>
      <h3>Nearly completed</h3>
      <div className="CardCarousell">
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/1.jpg"}
          category={"Third World"}
          title={"Title of Crowdfund"}
          percentage={100}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Polution"}
          title={"Title of Crowdfund"}
          percentage={26}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/3.jpg"}
          category={"Energy"}
          title={"Title of Crowdfund"}
          percentage={72}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/4.jpg"}
          category={"Disaster"}
          title={"Title of Crowdfund"}
          percentage={61}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Polution"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          to={"/project"}
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Polution"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
      </div>
    </div>
  );
}

export default DiscoverPage;
