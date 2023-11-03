import React, {useState} from 'react'
import DemoContext from './DemoContext'

const DataContextProvider= ({children}) => {

    const [user, setUser]= useState(null)
    return (
        <DemoContext.Provider value={{user, setUser}}>
        {children}
        </DemoContext.Provider>
    )}

export default UserContextProvider