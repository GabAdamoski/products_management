import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDataInfoContext } from '../../hooks/useDataInfoContext'

const Edit = () => {
  
  const [tabEdit, setTabEdit] = useState([])
  const [nvar1, setnVar1] = useState('')
  const [nvar2, setnVar2] = useState('')
  const [nvar3, setnVar3] = useState('')
  const [nvar4, setnVar4] = useState('')
  const [nvar5, setnVar5] = useState('')
  const [nvar6, setnVar6] = useState('')
  const [nvar7, setnVar7] = useState('')
  const [nvar8, setnVar8] = useState('')
  const [nvar9, setnVar9] = useState('')
  const [nvar10, setnVar10] = useState('')
  const [contador, setContador] = useState(0)
  const [acionar, setAcionar] = useState(true)

  //PUT
  const {idRow, url, par1, par2, par3, par4, par5, par6, par7, par8, par9, par10} = useDataInfoContext()

  let elementos = 0
  if(par1 !== undefined){
    elementos = elementos + 1
    if(par2 !== undefined){
      elementos = elementos + 1
      if(par3 !== undefined){
        elementos = elementos + 1
        if(par4 !== undefined){
          elementos = elementos + 1
          if(par5 !== undefined){
            elementos = elementos + 1
            if(par6 !== undefined){
              elementos = elementos + 1
              if(par7 !== undefined){
                elementos = elementos + 1
                if(par8 !== undefined){
                  elementos = elementos + 1
                  if(par9 !== undefined){
                    elementos = elementos + 1
                    if(par10 !== undefined){
                      elementos = elementos + 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  let preenchidos = 0
  if(nvar1 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar2 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar3 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar4 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar5 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar6 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar7 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar8 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar9 !== ''){
    preenchidos = preenchidos +1
  }
  if(nvar10 !== ''){
    preenchidos = preenchidos +1
  }

  useEffect(() => {
    if(preenchidos === elementos){
      setAcionar(false)
    }else{
      setAcionar(true)
    }
  },[preenchidos])
  
  useEffect(() => {
    async function fetchedit(){
        const res = await fetch(`${url}?id=${idRow}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          })
        const resp = await res.json()
        setTabEdit(resp)  
    }
    fetchedit()
  },[])

  const valores = Object.entries(tabEdit)

  if(valores.length>0 && contador<2){
    if(valores[0]){
      const [, value0] = valores[0]
      setnVar1(value0)}
    if(valores[1]){
      const [,value1] = valores[1]
      setnVar2(value1)}
    if(valores[2]){
      const [, value2] = valores[2]
      setnVar3(value2)}
    if(valores[3]){
      const [,value3] = valores[3]
      setnVar4(value3)}
    if(valores[4]){
      const [, value4] = valores[4]
      setnVar5(value4)}
    if(valores[5]){
      const [,value5] = valores[5]
      setnVar6(value5)}
    if(valores[6]){
      const [, value6] = valores[6]
      setnVar7(value6)}
    if(valores[7]){
      const [,value7] = valores[7]
      setnVar8(value7)}
    if(valores[8]){
      const [, value8] = valores[8]
      setnVar9(value8)}
    if(valores[9]){
      const [,value9] = valores[9]
      setnVar10(value9)}
    setContador(contador + 1)
  }

  const handleSave = async(e) => {
    const novoEdit = {
        [par1]: `${nvar1}`,
        [par2]: `${nvar2}`,
        [par3]: `${nvar3}`,
        [par4]: `${nvar4}`,
        [par5]: `${nvar5}`,
        [par6]: `${nvar6}`,
        [par7]: `${nvar7}`,
        [par8]: `${nvar8}`,
        [par9]: `${nvar9}`,
        [par10]: `${nvar10}`
      }

    const res = await fetch(`${url}?id=${idRow}`,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(novoEdit),
    })
}

  return (
    <div>
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
            <td>
              <input type="text" value={nvar1} readOnly/>
            </td>
            {par2 && <td>
              <input type="text" value={nvar2} onChange={((e) => setnVar2(e.target.value))}/>
            </td>}
            {par3 && <td>
              <input type="text" value={nvar3} onChange={((e) => setnVar3(e.target.value))}/>
            </td>}
            {par4 && <td>
              <input type="text" value={nvar4} onChange={((e) => setnVar4(e.target.value))}/>
            </td>}
            {par5 && <td>
              <input type="text" value={nvar5} onChange={((e) => setnVar5(e.target.value))}/>
            </td>}
            {par6 && <td>
              <input type="text" value={nvar6} onChange={((e) => setnVar6(e.target.value))}/>
            </td>}
            {par7 && <td>
              <input type="text" value={nvar7} onChange={((e) => setnVar7(e.target.value))}/>
            </td>}
            {par8 && <td>
              <input type="text" value={nvar8} onChange={((e) => setnVar8(e.target.value))}/>
            </td>}
            {par9 && <td>
              <input type="text" value={nvar9} onChange={((e) => setnVar9(e.target.value))}/>
            </td>}
            {par10 && <td>
              <input type="text" value={nvar10} onChange={((e) => setnVar10(e.target.value))}/>
            </td>}
            <td>
              <Link to='/produto'>
                <button onClick={handleSave} disabled={acionar}>
                  Salvar
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Edit
