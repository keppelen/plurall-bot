import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/back-button'
import { AdmContainer, AdmDescription, AdmItemContainer, AdmItemRemoveButton, AdmText, Input, Page } from './styles'
import { useState } from 'react'
import api from '../../services/api'
import AlertBox from '../components/alertbox'

interface IItem {
    email: string,
    _id: string
}

interface ItemProps {
    item:IItem,
    clickRemove: Function
}



function Item(props:ItemProps){
    const {item} = props

    return (
        <AdmItemContainer>
            <AdmText> {item.email} </AdmText>
            <AdmItemRemoveButton onClick={() => {props.clickRemove(props.item.email)}}> 
                <IconContext.Provider value={{ color: '#ff645f', size: '20'}}>
                    <FaTrashAlt/> 
                </IconContext.Provider>
            </AdmItemRemoveButton>
        </AdmItemContainer>
    )
}


export default function AdmList(){
    const location = useLocation()
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState({title:'Ops!',description: '',on: false, function: () => {}})

    if(!location.state)
        return <div/>

    const data:IItem[] = location.state.data ? location.state.data : []
        
    async function Remove(email:string) {
        if(pass === '')
            return setError({...error, description: 'Preenche a senha aí, mermão', on: true})

        try{
            setLoading(true)
            const response = await api.post(`/adm/users/delete`, {email}, {headers:{Authorization: `Bearer ${pass}`}})
    
            if(!response.data.message) return
            
            setLoading(false)

            // remove item from data state
            data.forEach(d => {
                if(d.email === email){
                    data.splice(data.indexOf(d), 1)
                }
            })

            return setError({...error, title: 'Sucesso!', description: response.data.message? response.data.message:'Erro inesperado', on: true})
        }catch(err:any){
            setLoading(false)
            if(!err)
                return setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})
            
                if(err.response)
                    setError({...error, description: err.response.data.error? err.response.data.error:'Erro inesperado', on: true})
            else
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true})
        }
    }
    
    function resetAlert(){
        setError({...error, on: false})
    }

    return (
        <Page>
            {error.on && 
                <AlertBox title={error.title} description={error.description} onPressOk={() => {resetAlert()}}/>
            }
            <AdmContainer>
                <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                    <BackButton/>
                    <AdmText> Lista Pão de forma </AdmText>
                </div>
                
                <Input style={{marginTop: '10px'}} type='password' placeholder='Digite a senha' onChange={v => setPass(v.target.value)}/>
                
                <div style={{opacity: loading ? '0.3' : '1'}}>
                    {data.map(item => (
                        <Item item={item} clickRemove={(email:string) => {Remove(email)}}/>
                    ))}
                </div>
                
            </AdmContainer>
        </Page>
    )
}