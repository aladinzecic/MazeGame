import { createContext, useState } from "react";


const AppContext=createContext()

function ContextProvider({children}){

    const [xCharacter,setXCharacter]=useState(-500)
    const [yCharacter,setYCharacter]=useState(-50)


      const values={
        xCharacter,
        yCharacter,
        setXCharacter,
        setYCharacter
      }

      return <AppContext.Provider value={values}>{children}</AppContext.Provider>;

}

export {AppContext,ContextProvider};