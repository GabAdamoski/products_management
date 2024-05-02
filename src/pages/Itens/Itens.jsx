import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataInfoContext } from '../../hooks/useDataInfoContext'

const Itens = () => {

    const {grupo, setGrupo, setPar1, setPar2, setPar3, setPar4, setPar5, setPar6, setPar7, setPar8, setPar9, setPar10, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, url, urll, setIdRow, var10, setVar10, var9, setVar9, var8, setVar8, var7, setVar7, var6, setVar6, var5, setVar5, var4, setVar4, var3, setVar3, var2, setVar2, var1, setVar1} = useDataInfoContext()

    const [termoProcurado, setTermoProcurado] = useState('')
    const [database, setDatabase] = useState([])

    const navigate = useNavigate()

    //POST
    const handlePost = async(e) => {
      e.preventDefault()
      const novoProd = {
        [par1]: `${var1}`,
        [par2]: `${var2}`,
        [par3]: `${var3}`,
        [par4]: `${var4}`,
        [par5]: `${var5}`,
        [par6]: `${var6}`,
        [par7]: `${var7}`,
        [par8]: `${var8}`,
        [par9]: `${var9}`,
        [par10]: `${var10}`
      }
      const res = await fetch(url,{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(novoProd),
      })
      const novo = await res.json()
      setVar1('')
      setVar2('')
      setVar3('')
      setVar4('')
      setVar5('')
      setVar6('')
      setVar7('')
      setVar8('')
      setVar9('')
      setVar10('')
    }

    //PUT
    const handleData = (auxid) => {
      setIdRow(auxid)
      navigate('/edit')
    }

    //DELETE
    const handleDelete = async(idrow) => {
        await fetch(`${url}?id=${idrow}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
            },
        })
    }

    //GET
    useEffect(() => {
      async function fetchGet(){
          const res = await fetch(urll, {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
          const aux = await res.json()
          setDatabase(aux)
      }
      fetchGet()
    },[handleDelete])

    const handleVolta = () => {
      setGrupo('')
      setPar1('')
      setPar2('')
      setPar3('')
      setPar4('')
      setPar5('')
      setPar6('')
      setPar7('')
      setPar8('')
      setPar9('')
      setPar10('')
      navigate('/home')
    }
  
    const lista = (
        <tbody>
          {database.filter(aux => 
            (par1 && aux[par1].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par2 && aux[par2].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par3 && aux[par3].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par4 && aux[par4].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par5 && aux[par5].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par6 && aux[par6].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par7 && aux[par7].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par8 && aux[par8].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
            (par9 && aux[par9].toLowerCase().includes(termoProcurado.toLocaleLowerCase())) ||
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
                <button onClick={() => handleData(aux[par1])}>Editar</button>
                <button onClick={() => handleDelete(aux[par1])}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      )

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

    const adicionar = (
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
        <tbody>
          <tr>
            {par1 && <td>
              <input type="text" name={par1} value={var1} required onChange={((e) => setVar1(e.target.value))}/>
            </td>}
            {par2 && <td>
              <input type="text" name={par2} value={var2} required onChange={((e) => setVar2(e.target.value))}/>
            </td>}
            {par3 && <td>
              <input type="text" name={par3} value={var3} required onChange={((e) => setVar3(e.target.value))}/>
            </td>}
            {par4 && <td>
              <input type="text" name={par4} value={var4} required onChange={((e) => setVar4(e.target.value))}/>
            </td>}
            {par5 && <td>
              <input type="text" name={par5} value={var5} required onChange={((e) => setVar5(e.target.value))}/>
            </td>}
            {par6 && <td>
              <input type="text" name={par6} value={var6} required onChange={((e) => setVar6(e.target.value))}/>
            </td>}
            {par7 && <td>
              <input type="text" name={par7} value={var7} required onChange={((e) => setVar7(e.target.value))}/>
            </td>}
            {par8 && <td>
              <input type="text" name={par8} value={var8} required onChange={((e) => setVar8(e.target.value))}/>
            </td>}
            {par9 && <td>
              <input type="text" name={par9} value={var9} required onChange={((e) => setVar9(e.target.value))}/>
            </td>}
            {par10 && <td>
              <input type="text" name={par10} value={var10} required onChange={((e) => setVar10(e.target.value))}/>
            </td>}
            <td>
              <button type='submit' onClick={handlePost}>Adicionar</button>
            </td>
          </tr>
        </tbody>
      </table>
    )

    return(
        <div>
        <button onClick={handleVolta}>Voltar</button>
          <h2>{grupo}</h2><br></br>
          <div>
            <h2>Adicionar Item</h2>
            {adicionar}
          </div><br></br>
          <h2>Itens Adicionados</h2>
          <div>
            <input type="text" value={termoProcurado} onChange={(e) => setTermoProcurado(e.target.value)}/>
          </div>
        {adicionados}
      </div>
    )
}

export default Itens