import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {id, name, img, description, price} = service || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
         
         <figure className="px-2 pt-10">
           <img src={img} alt="Shoes" className="w-full h-60" />
         </figure>
         <div className="card-body items-center text-center">
           <h2 className="card-title">{name}</h2>
           <p className="font-semibold">{price}</p>
           <div className="card-actions">
       
           {
                           description.length > 100
                               ? <p>{description.slice(0, 100)}.....</p>
                               : <p>{description}</p>
                       }
       
               <div className="ml-24">
               <Link to={`/service/${id}`}>
               <button className="btn bg-slate-950 text-white">Show Details</button>
               </Link>
               </div>
            
           </div>
         </div>
       </div>

        </div>
        
    );
};

export default ServicesCard;