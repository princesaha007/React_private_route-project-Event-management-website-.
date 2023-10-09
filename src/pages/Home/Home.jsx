import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import Reviews from "../../components/Reviews/Reviews";


const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        
        <div>
            <div>
                <Banner></Banner>
            </div>
          
           <div>
            <Services services = {services}></Services>
           </div>

           <div>
            <Team></Team>
           </div>

           <div className="flex items-center justify-center">
            <Reviews></Reviews>
           </div>

           <div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;