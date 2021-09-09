import React, { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdAutorenew } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/back-button'
import { AdmContainer, AdmInfoContainer, AdmItemContainer, AdmItemRemoveButton, AdmText, AdmTextDate, Input, ListContainer, Page } from './styles'
import { useState } from 'react'
import api from '../../services/api'
import AlertBox from '../components/alertbox'
import NoToken from './notoken'

interface IItem {
    email: string,
    _id: string,
    createdAt: string,
    vital: boolean,
    contact: string|null
}

interface ItemProps {
    item:IItem,
    clickRemove: Function,
    clickRenew: Function
}


function Item(props:ItemProps){
    const {item} = props
    const {email, vital, contact} = item
    const today = new Date()
    const date = new Date(item.createdAt)
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    const differenceInTime = Math.abs(today.getTime() - date.getTime())
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

    return (
        <AdmItemContainer>
            <AdmInfoContainer> 
                <AdmText> {email} </AdmText>
                <AdmTextDate> Criado: {`${day<10&&'0'}${day}/${month<10&&'0'}${month}/${year}`} |  {differenceInDays} Dias </AdmTextDate>
                <AdmTextDate style={{marginTop: '5px'}}> Plano: {vital ? 'VITALICIO' : 'Mensal'} </AdmTextDate>
                {contact && <AdmTextDate> Contato: {contact} </AdmTextDate>}
            </AdmInfoContainer>
            <div style={{display: 'flex'}}>
                <AdmItemRemoveButton onClick={() => {props.clickRenew(props.item.email)}}> 
                    <IconContext.Provider value={{ color: '#00b083', size: '20'}}>
                        <MdAutorenew/> 
                    </IconContext.Provider>
                </AdmItemRemoveButton>
                
                <AdmItemRemoveButton onClick={() => {props.clickRemove(props.item.email)}}> 
                    <IconContext.Provider value={{ color: '#ff645f', size: '20'}}>
                        <FaTrashAlt/> 
                    </IconContext.Provider>
                </AdmItemRemoveButton>
            </div>
        </AdmItemContainer>
    )
}


const AdmList:React.FC = () =>{
    const password = localStorage.getItem('did') ? localStorage.getItem('did') : ''
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState({title:'Ops!',description: '',on: false, function: () => {}})
    const [data, setData] = useState<IItem[]>([])

    
    useEffect(() => {
        UpdateList()
    },[])

    if(password === '')
        return <NoToken/>

    async function UpdateList() {
        try{
            setLoading(true)
            const response = await api.get(`/adm/users/list`, {headers:{Authorization: `Bearer ${password}`}})
            const {data} = response
            setData(data)
            setLoading(false)
        }catch(error:any){
            setLoading(false)
            if(!error)
                return setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})
            
                if(error.response)
                    setError({...error, description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true})
            else
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true})
        }
    }
        
    async function Remove(email:string) {
        if(password === '')
            return setError({...error, description: 'Preenche a senha aí, mermão', on: true})

        try{
            setLoading(true)
            const response = await api.post(`/adm/users/delete`, {email}, {headers:{Authorization: `Bearer ${password}`}})
    
            if(!response.data.message) return
            
            setLoading(false)
            UpdateList()

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

    async function Renew(email:string) {
        if(password === '')
            return setError({...error, description: 'Preenche a senha aí, mermão', on: true})

        try{
            setLoading(true)
            const response = await api.post(`/adm/users/renew`, {email}, {headers:{Authorization: `Bearer ${password}`}})
    
            setLoading(false)
            UpdateList()
            if(!response.data.message) return
            

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
            <AdmContainer style={{marginTop: '100px', marginBottom: '100px'}}>
                <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                    <BackButton/>
                    <AdmText> Lista Pão de forma </AdmText>
                </div>
                
                <ListContainer opacity={loading ? '0.3' : '1'}>
                    {data.map(item => (
                        <Item item={item} clickRenew={(email:string) => {Renew(email)}} clickRemove={(email:string) => {Remove(email)}}/>
                    ))}
                </ListContainer>
                
            </AdmContainer>
        </Page>
    )
}

export default AdmList