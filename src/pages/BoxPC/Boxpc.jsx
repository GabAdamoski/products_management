import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataInfoContext } from '../../hooks/useDataInfoContext'
import Modal from 'react-modal'

const Boxpc = () => {

    const {grupo, setGrupo, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10} = useDataInfoContext()

    const [termoProcurado, setTermoProcurado] = useState('')
    const [database, setDatabase] = useState([])
    const [dbSo, setDbSo] = useState([])
    const [dbArmazenamento, setDbArmazenamento] = useState([])
    const [dbRam, setDbRam] = useState([])
    const [dbFonte, setDbFonte] = useState([])
    const [dbProcessador, setDbProcessador] = useState([])
    const [dbTela, setDbTela] = useState([])
    const [So, setSo] = useState('')
    const [aciona, setAciona] = useState(true)
    const [idPcBox, setIdPcBox] = useState('')
    const [expSoType, setExpSoType] = useState('')
    const [expArmzSize, setExpArmzSize] = useState('')
    const [expRamSize, setExpRamSize] = useState('')
    const [expFonte, setExpFonte] = useState('')
    const [expProcs, setExpProsc] = useState('')
    const [expTelaResol, setExpTelaResol] = useState('')
    const [expTelaSize, setExpTelaSize] = useState('')
    const [abrir, setAbrir] = useState(false)
    const [localid, setLocalid] = useState('')

    const navigate = useNavigate()

    const handleAdd = async(e) => {
      e.preventDefault()
      const novoBoxPc = {
        'armazenamento':`${expArmzSize}`,
        'fonte':`${expFonte}`,
        'idboxpc':`${idPcBox}`,
        'idso':`${So}`,
        'memoriaram':`${expRamSize}`,
        'processador':`${expProcs}`,
        'so':`${expSoType}`,
        'telaresolucao':`${expTelaResol}`,
        'telatamanho':`${expTelaSize}`
      }
      const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/BoxPC',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoBoxPc),
      })
      const novo = await res.json()
      setIdPcBox('')
    }

    const handleDelete = async(idrow) => {
      await fetch(`https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/BoxPC?id=${idrow}`,{
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
          },
      })
    }

    const handleSave = async() => {
      const novoEdit = {
        'armazenamento':`${expArmzSize}`,
        'fonte':`${expFonte}`,
        'idboxpc':`${localid}`,
        'idso':`${So}`,
        'memoriaram':`${expRamSize}`,
        'processador':`${expProcs}`,
        'so':`${expSoType}`,
        'telaresolucao':`${expTelaResol}`,
        'telatamanho':`${expTelaSize}`
      }
      const res = await fetch(`https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/BoxPC?id=${localid}`,{
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
          },
          body: JSON.stringify(novoEdit),
      })
      setAbrir(false)
    }

    useEffect(() => {
      async function fetchSo(){
          const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/SOs', {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDbSo(aux)
      }
      fetchSo()
    },[])

    useEffect(() => {
      async function fetchArmaz(){
          const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/Armazenamentos', {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDbArmazenamento(aux)
      }
      fetchArmaz()
    },[])

    useEffect(() => {
      async function fetchRam(){
          const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/MemoriaRams', {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDbRam(aux)
      }
      fetchRam()
    },[])

    useEffect(() => {
      async function fetchFonte(){
          const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/Fontes', {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDbFonte(aux)
      }
      fetchFonte()
    },[])
    
    useEffect(() => {
      async function fetchProc(){
          const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/Processadors', {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDbProcessador(aux)
      }
      fetchProc()
    },[])

    useEffect(() => {
      async function fetchTela(){
          const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/Telas', {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDbTela(aux)
      }
      fetchTela()
    },[])

    useEffect(() => {
        async function fetchGet(){
            const res = await fetch('https://portwelltacking-backend.lyu1vb.easypanel.host/api/v1/BoxPCs', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json'
                }
              })
            const aux = await res.json()
            setDatabase(aux)
        }
        fetchGet()
      },[handleAdd, handleSave])

    const listaSo = dbSo.map(aux => ({id:aux.idso, value:`${aux.type}, ${aux.serialnumber}`, exp:aux.type}))
    const listaArmazenamento = dbArmazenamento.map(aux => ({id:aux.idarmazenamento, value:`${aux.type}, ${aux.size}`, exp:aux.size}))
    const listaRam = dbRam.map(aux => ({id:aux.idmemoriaram, value:`${aux.type}, ${aux.size}`, exp:aux.size}))
    const listaFonte = dbFonte.map(aux => ({id:aux.idfonte, value:`${aux.modelo}`}))
    const listaProcessador = dbProcessador.map(aux => ({id:aux.idprocessador, value:`${aux.model}`}))
    const listaTela = dbTela.map(aux => ({id:aux.idtela, value:`${aux.type}, ${aux.tamanho}, ${aux.resolucao}, ${aux.fonte}`, resol:aux.resolucao, siz: aux.tamanho}))
    
    const handleVolta = () => {
      setGrupo('')
      navigate('/home')
    }

    const handleSo = (e) => {
      const [vid, vty] = (e.target.value).split(',')
      setSo(vid)
      setExpSoType(vty)
    }

    const handleTela = (e) => {
    const [vres, vsiz] = (e.target.value).split(',')
    setExpTelaResol(vres)
    setExpTelaSize(vsiz)
    }

    const render1 = (
      <div>
        <h3>Sistema Operacional:</h3>
        <select onChange={handleSo}>
          <option value='' hidden></option>
          {listaSo.map(aux => (
            <option key={aux.id} value={`${aux.id},${aux.exp}`}>
              {aux.value}
            </option>
          ))}
        </select>
      </div>
    )

    const render2 = (
      <div>
        <h3>Armazenamento:</h3>
        <select onChange={(e) => setExpArmzSize(e.target.value)} required>
          <option value='' hidden></option>
          {listaArmazenamento.map(aux => (
            <option key={aux.id} value={aux.exp}>
              {aux.value}
            </option>
          ))}
        </select>
      </div>
    )

    const render3 = (
      <div>
        <h3>Memória RAM:</h3>
        <select onChange={(e) => setExpRamSize(e.target.value)} required>
          <option value='' hidden></option>
          {listaRam.map(aux => (
            <option key={aux.id} value={aux.exp}>
              {aux.value}
            </option>
          ))}
        </select>
      </div>
    )

    const render4 = (
      <div>
        <h3>Fonte:</h3>
        <select onChange={(e) => setExpFonte(e.target.value)} required>
          <option value='' hidden></option>
          {listaFonte.map(aux => (
            <option key={aux.id} value={aux.value}>
              {aux.value}
            </option>
          ))}
        </select>
      </div>
    )

    const render5 = (
      <div>
        <h3>Processador:</h3>
        <select onChange={(e) => setExpProsc(e.target.value)} required>
          <option value='' hidden></option>
          {listaProcessador.map(aux => (
            <option key={aux.id} value={aux.value}>
              {aux.value}
            </option>
          ))}
        </select>
      </div>
    )

    const render6 = (
      <div>
        <h3>Tela:</h3>
        <select onChange={handleTela} required>
          <option value='' hidden></option>
          {listaTela.map(aux => (
            <option key={aux.id} value={`${aux.resol},${aux.siz}`}>
              {aux.value}
            </option>
          ))}
        </select>
      </div>
    )

    const lista = (
      <tbody>
        {database.filter(aux => 
          (par1 && aux[par1].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par2 && aux[par2].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par3 && aux[par3].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par4 && aux[par4].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par5 && aux[par5].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par6 && aux[par6].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par7 && aux[par7].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par8 && aux[par8].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par9 && aux[par9].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))||
          (par10 && aux[par10].toLowerCase().includes(termoProcurado.toLocaleLowerCase()))
        ).map(aux => (
          <tr key={aux[par1]}>
            <td>{aux[par1]}</td>
            <td>{aux[par2]}</td>
            <td>{aux[par3]}</td>
            <td>{aux[par4]}</td>
            <td>{aux[par5]}</td>
            <td>{aux[par6]}</td>
            <td>{aux[par7]}</td>
            <td>{aux[par8]}</td>
            <td>{aux[par9]}</td>
            <td>{aux[par10]}</td>
            <td>
              <button onClick={() => handleEdit(aux[par1])}>Editar</button><Modal isOpen={abrir} ariaHideApp={false}>
                <button onClick={() => setAbrir(false)}>Fechar</button>
                <h2>Editar</h2>
                {render1}
                {render2}
                {render3}
                {render4}
                {render5}
                {render6}
                <button onClick={handleSave}>Salvar</button>
              </Modal>
              <button onClick={() => handleDelete(aux[par1])}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    )

    const handleEdit = (idrow) => {
      setAbrir(true)
      setLocalid(idrow)
    }

    const adicionados = (
    <table>
        <thead>
        <tr>
          {par1 && <th>{par1}</th>}
          {par2 && <th>{par2}</th>}
          {par3 && <th>{par3}</th>}
          {par4 && <th>{par4}</th>}
          {par5 && <th>{par5}</th>}
          {par6 && <th>{par6}</th>}
          {par7 && <th>{par7}</th>}
          {par8 && <th>{par8}</th>}
          {par9 && <th>{par9}</th>}
          {par10 && <th>{par10}</th>}
        </tr>
        </thead>
        {lista}
    </table>
    )

    useEffect(() => {
      if(So !== '' && expArmzSize !== '' && expRamSize !== '' && expProcs !== '' && expTelaResol !== '' && expFonte !== '' && idPcBox !== ''){
        setAciona(false)
      }else{
        setAciona(true)
      }
    },[So, expArmzSize, expRamSize, expProcs, expTelaResol, expFonte, idPcBox])

  return (
    <div>
      <button onClick={handleVolta}>Voltar</button>
      <h2>{grupo}</h2><br></br>
      <div>
        <h2>Adicionar Item</h2>
      </div>
      <div>
        <h3>Id PC box: </h3>
        <input type='text' value={idPcBox} onChange={(e) => setIdPcBox(e.target.value)}/>
      </div>
        {render1}
        {render2}
        {render3}
        {render4}
        {render5}
        {render6}
        <br></br><button type='submit' onClick={handleAdd} disabled={aciona}>Adicionar</button>
      <h2>Itens Adicionados</h2>
      <div>
        <input type="text" value={termoProcurado} onChange={(e) => setTermoProcurado(e.target.value)}/>
      </div>
      {adicionados}
    </div>
  )
}

export default Boxpc