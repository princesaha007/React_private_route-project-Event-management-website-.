

const ServiceDetailsCard = ({service}) => {
    const {id, name, img, description, price} = service || {}
    return (
        <div>
            <div className="flex justify-center content-center ">
                <img className="w-full
                " src={img} alt="" />
            </div>
            <p className="text-3xl font-bold mt-3">{name}</p>
            <p className="text-xl font-semibold mb-3 mt-2">{description}</p>
            <button  className="btn bg-slate-950 text-white" >Price <span>{price}</span></button>
            
        </div>
    );
};

export default ServiceDetailsCard;