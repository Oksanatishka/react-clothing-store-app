import Items from '../components/Items';
// import Link from 'next/link';
// import React from 'react';   // next js will take care of it

// !! Class component
// class Home extends React.Component {
//     render() {
//         return <p>Hello!</p>;
//     }
// }

// We are replacing the commented section above with the following below:
// !! stateless Functional component
const Home = props => (
    <div>
        {/* <p>Hello World!</p> */}
        <Items />
    </div>
);

export default Home;
