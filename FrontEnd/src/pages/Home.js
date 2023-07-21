import Slider from "components/Slider/Slider";
import GoodDesign from "components/GoodDesign/GoodDesign";
import Discover from "components/Discover/Discover";
import Brand from "components/Brand/Brand";
import Categories from "components/Categories/AllProduct";

const Home = () => {
    return <>
        <Slider />
        <Brand />
        <Categories />
        <GoodDesign />
        <Discover />
    </>
}
export default Home;