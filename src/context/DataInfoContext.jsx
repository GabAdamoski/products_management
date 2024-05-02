import { createContext, useEffect, useState } from "react"

export const DataInfoContext = createContext()

export const DataInfoContextProvider = ({children}) => {
  
    const [grupo, setGrupo] = useState('')
    const [par1, setPar1] = useState('')
    const [par2, setPar2] = useState('')
    const [par3, setPar3] = useState('')
    const [par4, setPar4] = useState('')
    const [par5, setPar5] = useState('')
    const [par6, setPar6] = useState('')
    const [par7, setPar7] = useState('')
    const [par8, setPar8] = useState('')
    const [par9, setPar9] = useState('')
    const [par10, setPar10] = useState('')
    const [getRef, setGetRef] = useState([])
    const [url, setUrl] = useState('')
    const [urll, setUrll] = useState('')
    const [idRow, setIdRow] = useState('')
    const [var1, setVar1] = useState('')
    const [var2, setVar2] = useState('')
    const [var3, setVar3] = useState('')
    const [var4, setVar4] = useState('')
    const [var5, setVar5] = useState('')
    const [var6, setVar6] = useState('')
    const [var7, setVar7] = useState('')
    const [var8, setVar8] = useState('')
    const [var9, setVar9] = useState('')
    const [var10, setVar10] = useState('')

    return(
        <DataInfoContext.Provider value={{var3, setVar3, var2, setVar2, var1, 
        setVar1, setIdRow, idRow, url, urll, setUrl, setUrll, grupo, setGrupo, getRef, setGetRef, 
        par1, setPar1, par2, setPar2, par3, setPar3, var4, setVar4, var5, setVar5, var6, setVar6,
        var7, setVar7, var8, setVar8, var9, setVar9, var10, setVar10, par4, setPar4, par5, setPar5,
        par6, setPar6, par7, setPar7, par8, setPar8, par9, setPar9, par10, setPar10}}>
            {children}
        </DataInfoContext.Provider>
    )
}