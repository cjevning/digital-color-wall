export default () => ({
  flipContainer: {
    perspective: props => props.size,
    margin: '0.2em 0.1em',
    width: props => props.size,
    height: props => props.size,
  },

  flipper: {

  },

  front: {
    width: props => props.size,
    height: props => props.size,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: props => props.color,
  },

  back: {
    width: props => props.size,
    height: props => props.size,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
  },

/* entire container, keeps perspective */

//   /* flip the pane when hovered */
//   .flip-container:hover .flipper, .flip-container.hover .flipper {
//     transform: rotateY(180deg);
//   }


// /* flip speed goes here */
// .flipper {
//   transition: 0.6s;
//   transform-style: preserve-3d;

//   position: relative;
// }

// /* front pane, placed above back */
// .front {
//   z-index: 2;
//   /* for firefox 31 */
//   transform: rotateY(0deg);
// }

// /* back, initially hidden pane */
// .back {
//   transform: rotateY(180deg);
// }

// .vertical.flip-container {
//   position: relative;
// }

//   .vertical .back {
//     transform: rotateX(180deg);
//   }

//   .vertical.flip-container .flipper {
//     transform-origin: 100% 0.5em; /* half of height */
//   }

//   .vertical.flip-container:hover .flipper {
//     transform: rotateX(-180deg);
//   }
}); 
