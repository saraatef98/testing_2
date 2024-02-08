import { React, useState } from 'react';

const ClubComponent = () => {
  const [bestClub, setBestClub] = useState('RealMadrid');

  const handleClubChange = (event) => {
    setBestClub(event.target.value);
  };

  return (
    <div>
      <label htmlFor="bestClubSelect">Select Best Club: </label>
      <select id="bestClubSelect" value={bestClub} onChange={handleClubChange}>
        <option value="Barcelona">Barcelona</option>
        <option value="RealMadrid">Real Madrid</option>
        <option value="Ahly">Ahly</option>
        <option value="Zamelk">Zamelk</option>
        <option value="Other">Other</option>
      </select>

      {bestClub === 'Barcelona' ? <p>Visca el Barça!</p> : bestClub === 'RealMadrid' ? <p>Hala Madrid!</p> : bestClub === 'Ahly' ? <p>King of Africa</p> : bestClub === 'Zamelk' ? <p>I support Zamelk</p> : <p>Other Club</p>}
    </div>
  );
};

export default ClubComponent;

