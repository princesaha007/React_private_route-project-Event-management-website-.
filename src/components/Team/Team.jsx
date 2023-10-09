import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/team.json')
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    
    
    
   <div>
       <div className="text-4xl font-bold text-center mt-8 mb-6">
        Our Team Leaders
    </div>

    <div>

    </div>


     <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center w-full mb-20 ">
    {
        teamData.map( t=> <TeamCard key= {t.id} team={t}></TeamCard>)
    }
    
</div>
   </div>
  );
};

export default Team;
