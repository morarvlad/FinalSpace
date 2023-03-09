// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import TinderCard from 'react-tinder-card';
// import classes from '../styles/tinder.module.css';

// function Advanced() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://finalspaceapi.com/api/v0/character?limit=5')
//       .then(res => res.json())
//       .then(data => setData(data));
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(data.length - 1);
//   const [lastDirection, setLastDirection] = useState();
//   // used for outOfFrame closure
//   const currentIndexRef = useRef(currentIndex);

//   const childRefs = useMemo(
//     () =>
//       Array(data.length)
//         .fill(0)
//         .map(i => React.createRef()),
//     []
//   );

//   const updateCurrentIndex = val => {
//     setCurrentIndex(val);
//     currentIndexRef.current = val;
//   };

//   const canGoBack = currentIndex < data.length - 1;

//   const canSwipe = currentIndex >= 0;

//   // set last direction and decrease current index
//   const swiped = (direction, nameToDelete, index) => {
//     setLastDirection(direction);
//     updateCurrentIndex(index - 1);
//   };

//   const outOfFrame = (name, idx) => {
//     console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
//     // handle the case in which go back is pressed before card goes outOfFrame
//   };

//   const swipe = async dir => {
//     if (canSwipe && currentIndex < data.length) {
//       await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
//     }
//   };

//   // increase current index and show card
//   const goBack = async () => {
//     if (!canGoBack) return;
//     const newIndex = currentIndex + 1;
//     updateCurrentIndex(newIndex);
//     await childRefs[newIndex].current.restoreCard();
//   };

//   return (
//     <div className={classes.tinder_div}>
//       <link
//         href="https://fonts.googleapis.com/css?family=Damion&display=swap"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
//         rel="stylesheet"
//       />
//       <h1>Good or Evil</h1>
//       <div className={classes.cardContainer_tinder}>
//         {data.map((character, index) => (
//           <TinderCard
//             ref={childRefs[index]}
//             className={classes.swipe}
//             key={character.name}
//             onSwipe={dir => swiped(dir, character.name, index)}
//             onCardLeftScreen={() => outOfFrame(character.name, index)}
//           >
//             <div
//               style={{ backgroundImage: 'url(' + character.img_url + ')' }}
//               className={classes.card_tinder}
//             >
//               <h3>{character.name}</h3>
//             </div>
//           </TinderCard>
//         ))}
//       </div>
//       <div className={classes.buttons}>
//         <button
//           style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
//           onClick={() => swipe('left')}
//         >
//           Swipe left!
//         </button>
//         <button
//           style={{ backgroundColor: !canGoBack && '#c3c4d3' }}
//           onClick={() => goBack()}
//         >
//           Undo swipe!
//         </button>
//         <button
//           style={{ backgroundColor: !canSwipe && '#c3c4d3' }}
//           onClick={() => swipe('right')}
//         >
//           Swipe right!
//         </button>
//       </div>
//       {lastDirection ? (
//         <h2 key={lastDirection} className={classes.infoText}>
//           You swiped {lastDirection}
//         </h2>
//       ) : (
//         <h2 className={classes.infoText}>
//           Swipe a card or press a button to get Restore Card button visible!
//         </h2>
//       )}
//     </div>
//   );
// }

// export default Advanced;
