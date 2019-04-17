import React, {Component, Fragment} from 'react';
import Link from 'next/link';
import styles from './index/style.js';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
           <Fragment>
               <h1>Home Page</h1>
               <style jsx>{styles}</style>
           </Fragment> 
        );
    }
}

export default App;