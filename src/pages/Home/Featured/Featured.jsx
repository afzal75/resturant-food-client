import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Featured.css";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading="Featured Items"
        subHeading="Check It Out"
      ></SectionTitle>
      <div
        className="md:flex
         bg-opacity-60 justify-center 
      items-center pb-20 py-12 px-36"
      >
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2023</p>
          <p>Where can I get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa enim
            quibusdam magni id quam rerum hic vitae voluptatibus ipsa, ab sit
            nesciunt, veritatis iusto animi incidunt nihil esse iste eaque a
            libero sequi, aliquam ipsam? Reprehenderit accusamus quibusdam
            dolorem repellat quis incidunt fuga maxime harum! Harum ea fugiat
            quis cum?
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
