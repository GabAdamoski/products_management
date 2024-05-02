import { useContext  } from "react"
import { DataInfoContext } from '../context/DataInfoContext'

export const useDataInfoContext = () => {
    const context = useContext(DataInfoContext)

    if(!context){
        console.log('Falha ao encontrar o context')
    }
    return context
}