import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Helmet = props => {

    document.title = 'SKT - ' + props.title; 

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet;

// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

// const Helmet = (props) => {
//     useEffect(() => {
//         document.title = 'SKT - ' + props.title;
//         window.scrollTo(0, 0);
//     }, [props.title]);

//     return (<div>{props.children}</div>);
// }

// Helmet.propTypes = {
//     title: PropTypes.string.isRequired,
// };

// export default Helmet;