import ServicesCard from "./ServicesCard";


const Services = ({services}) => {
    
    return (
<div>
    <div className="text-4xl font-bold text-center mt-8">
        Our Services
    </div>
       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center w-full mb-20 ">
            {
                services.map( s=> <ServicesCard key= {s.id} service={s}></ServicesCard> )
            }
            
        </div>
</div>
    );
};

export default Services;