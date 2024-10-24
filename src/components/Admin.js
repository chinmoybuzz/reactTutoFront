import React from 'react'

export default function Admin() {
  return (
   <section>
    <h1>Admin</h1>
    <br/>
     <p>You must have been assigned an Admin role.</p>
     <div className="flexGrow">
        <Link to="/">Home</Link>
     </div>
   </section>
  )
}
