import React from 'react'
import Org_Committee from './Org_Committee'
import Oth_Committee from './Oth_Committee'
import "../Committee/Committee.css"
function Hello() {
  return (
    <div className='flex justify-center items-center flex-col'>

    <Org_Committee/>
    <Oth_Committee/>
   

    </div>
    // </>
  )
}

export default Hello