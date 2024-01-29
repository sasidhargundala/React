import React from "react";

const Hello = ()=> {
//return (
    //<div>
        //<h1>Hello Sasidhar</h1>
    //</div>
 //)

 return React.createElement(
    'div', 
    null, 
    React.createElement('h1', null, 'Hello Sasidhar')
 )
}

export default Hello

//jsx version of hello component