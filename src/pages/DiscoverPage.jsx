import "./DiscoverPage.css"
import Card from './../components/Card'

function DiscoverPage() {

  return (
    <div className="DiscoverPage">
      <h1>Discover</h1>
      <h3>Top Projects</h3>
      <div className="CardCarousell">
        <Card
          imgSrc={"./placeholderImages/1.jpg"}
          category={"Third World"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          imgSrc={"./placeholderImages/2.jpg"}
          category={"Polution"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          imgSrc={"./placeholderImages/3.jpg"}
          category={"Energy"}
          title={"Title of Crowdfund"}
          percentage={69}
          currentAmount={0.356}
          completedAmount={0.5}
          currency={"ETH"}
        />
        <Card
          imgSrc={"./placeholderImages/4.jpg"}
          category={"Disaster"}
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
