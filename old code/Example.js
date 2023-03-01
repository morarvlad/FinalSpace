// function App() {
//   const [character, setCharacter] = useState([]);
//   const [image, setImage] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://finalspaceapi.com/api/v0/character/?limit=9')
//       .then(res => {
//         setCharacter(res.data.map(c => c.name));
//       });
//   }, []);

//   useEffect(() => {
//     axios.get('https://finalspaceapi.com/api/v0/character/').then(res => {
//       setImage(res.data.map(i => i.id));
//     });
//   }, []);

//   return (
//     (<CharacterImage character={image} />),
//     (<CharacterList character={character} />)
//   );
// }

// return (
//   <div className="root">
//     {data.map(character => (
//       <div className="card" key={character.id}>
//         <div className="card--image">
//           <img src={character.img_url} alt={character.name} />{' '}
//         </div>
//         <div className="card--title">{character.name}</div>
//         <div className="card--text">{character.species}</div>
//       </div>
//     ))}
//   </div>
// );

// const loader = async () => {
//   const user = await getUser();
//   if (!user) {
//     return redirect('/login');
//   }
// };

// {
//   /* <BrowserRouter>
// <Routes>
//   <Route path="/" element={<App />}>
//     <Route index element={<Header />} />
//     <Route index element={<CharacterGetter data={data} arr={arr} />} />
//     <Route path="garry" element={<GarryPage />} />
//   </Route>
// </Routes>
// </BrowserRouter> */
// }
