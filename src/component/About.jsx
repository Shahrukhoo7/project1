//rafce: for inbuild arrow function

import { createElement } from "react"
const About = () => {
  // return (
  //   <div>
  //       <h2>Type RAFCE for new arrow function</h2>
  //   </div>
  // )
  
    // return createElement('div',{class:'aboutdiv'},createElement('h3', null, "This is new div"))
    return createElement('div',{id:'hello',class:'msg'},
          createElement('div',null,),
          createElement('p',null,"Hello World")
        )
  
}

//rfce: for named


// function Abut() 
// {
//   return (
//     <div>
//         <h2>nhi bolenge kuch</h2>
//     </div>
//   )
// }

// {
//   return createElement('div',{class:'aboutdiv'},createElement('h3', null, "This is new div"))
// }
export default About
// export {Abut}