import React from 'react'
import { Link } from 'react-router-dom'

const Editer = () => {
  return (
   <section>
    <h1>Editor page</h1>
    <br/>
     <p>You must have been assigned an Editer role.</p>
     <div className="flexGrow">
        <Link to="/">Home</Link>
     </div>
   </section>
  )
}
export default Editer;
