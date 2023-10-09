

const TeamCard = ({team}) => {
    const {name, id, designation, description, picture} = team || {}
    return (
        <div>
            <div className="card card-compact w-96 bg-slate-900 shadow-xl  h-[400px]">
  <figure className="h-60"><img className="  w-full" src={picture} alt="Shoes" /></figure>
 
  <div className="card-body text-white">
    <h2 className="card-title font-bold">{name}</h2>
    <div className="font-semibold">{designation}</div>
    <p className="text-gray-500">{description}</p>
   
    </div>
  </div>
</div>
          
    );
};

export default TeamCard;