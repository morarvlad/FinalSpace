// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SpecificCharacterGetter from '../SpecificCharacterGetter';

// export default function AvocatoPage() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://finalspaceapi.com/api/v0/character/5')
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, []);

//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <>
//       <button onClick={goBack}>Go Back</button>
//       <SpecificCharacterGetter data={data} />
//     </>
//   );
// }