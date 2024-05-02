import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDataInfoContext}  from '../../hooks/useDataInfoContext' 

const Home = () => {

  const {grupo, setGrupo, setPar1, setPar2, setPar3, setPar4, setPar5, setPar6, setPar7, setPar8, setPar9, setPar10, url, setUrl, setUrll} = useDataInfoContext()
  const [habilita, setHabilita] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if(habilita){
      async function fetchGet(){
        const res = await fetch(`${url}?id=1`, {
          method: 'GET',
          headers: {
            'Accept':'application/json'
          }
        })
        const aux = await res.json()
        const chaves = Object.keys(aux)
        setPar1(chaves[0])
        setPar2(chaves[1])
        setPar3(chaves[2])
        setPar4(chaves[3])
        setPar5(chaves[4])
        setPar6(chaves[5])
        setPar7(chaves[6])
        setPar8(chaves[7])
        setPar9(chaves[8])
        setPar10(chaves[9])
      }
      fetchGet()
      if(grupo === "BoxPC"){
        navigate('/boxpc')
      }else{
        navigate('/produto')
      }
    }
  },[grupo])

  const handleClick = (parametro) => {
    setGrupo(parametro)
    setUrll(`https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/${parametro}s`)
    setUrl(`https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/${parametro}`)
    setHabilita(true)
  }

  const render = (
    <div>
        <button onClick={() => handleClick('SO')}>
          <span>Sistema Operacional</span>
        </button>
        <button onClick={() => handleClick('Armazenamento')}>
          <span>Armazenamento</span>
        </button>
        <button onClick={() => handleClick('MemoriaRam')}>
          <span>Memoria RAM</span>
        </button>
        <button onClick={() => handleClick('Fonte')}>
          <span>Fonte</span>
        </button>
        <button onClick={() => handleClick('Processador')}>
          <span>Processador</span>
        </button>
        <button onClick={() => handleClick('Tela')}>
          <span>Tela</span>
        </button>
        <button onClick={() => handleClick('BoxPC')}>
          <span>Box PC</span>
        </button>
    </div>
  )

  return (
    <div>
      {render}
    </div>
  )
}

export default Home
