import React, { useState } from 'react'
import { AdmButton, AdmContainer, AdmDescription, AdmText, CheckBoxContainer, CheckBoxText, Input, Page } from './styles'
import ReactLoading from 'react-loading'
import api from '../../services/api'
import AlertBox from '../components/alertbox'
import NoToken from './notoken'

const AdminAdd:React.FC = () =>{
    const [loading, setLoding] = useState(false)
    const [email, setEmail] = useState('email')
    const [contact, setContact] = useState('')
    const [checkboxs, setCheckboxs] = useState([true,false,false])
    const [plans, setPlans] = useState(['trial','monthly','lifetime'])
    const password = localStorage.getItem('did') ? localStorage.getItem('did') : ''
    const [plan, setPlan] = useState('trial')
    const [error,setError] = useState({title:'Ops!',description: '',on: false, function: () => {resetAlert()}})

    if(password === '')
        return <NoToken/>

    function changePlan(p:string){
        setPlan(p)
        let newarray = [false,false,false]
        newarray[plans.indexOf(p)] = true
        setCheckboxs(newarray)
    }

    async function Add() {
        try{
            setLoding(true)
            const response = await api.post(`/adm/users/add`, {email, plan, contact}, {headers:{Authorization: `Bearer ${password}`}})
            console.log(response)

            if(!response.data.message) return
            
            
            setLoding(false)
            return setError({...error, title: 'Sucesso!', description: response.data.message? response.data.message:'Erro inesperado', on: true})
        }catch(error:any){
            setLoding(false)
            if(!error)
                return setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})
            
                if(error.response)
                    setError({...error, description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true})
            else
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/',on: true})
        }
    }

    async function List() {
        window.location.href = '/paodeforma/list'
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
                <AdmText> Pão de forma </AdmText>
                <AdmDescription> pão de forma, pão? de forma!</AdmDescription>

            <Input placeholder='Digite o email' onChange={v => setEmail(v.target.value)}/>
            <Input placeholder='Digite o telefone de contao' onChange={v => setContact(v.target.value)}/>
            
            <CheckBoxContainer> 
                <input type="checkbox" checked={checkboxs[0]} onChange={(a) => {changePlan('trial')}}/>
                <CheckBoxText> Trial </CheckBoxText>
                <input type="checkbox" checked={checkboxs[1]} onChange={(a) => {changePlan('monthly')}}/>
                <CheckBoxText> 30 Dias </CheckBoxText>
                <input type="checkbox" checked={checkboxs[2]} onChange={(a) => {changePlan('lifetime')}}/>
                <CheckBoxText> Vitalício </CheckBoxText>
            </CheckBoxContainer>
            <AdmButton onClick={() => Add()} style={{backgroundColor: '#00b083', marginTop: '20px'}} > {LoadingText('Adicionar', loading) }</AdmButton>
            <AdmButton onClick={() => List()} style={{backgroundColor: '#655aa3'}}> {LoadingText('Listar', loading) }</AdmButton>
            </AdmContainer>
        </Page>
    )
}


function LoadingText(text:string, loading:boolean){
    return !loading ? text : <ReactLoading type={'spin'} color={'#fff'} height={'20px'} width={'20px'} />
}

export default AdminAdd