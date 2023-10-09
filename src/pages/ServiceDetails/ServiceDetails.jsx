import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";


const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);

    const service = services.find(s=> s.id=== idInt)
    console.log(service)
    return (
        <div>
            <ServiceDetailsCard service= {service}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;