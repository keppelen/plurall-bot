import React, { useState } from 'react'
import { AdmButton, AdmContainer, AdmDescription, AdmText, Input, Page } from './styles'
import ReactLoading from 'react-loading'
import api from '../../services/api'
import AlertBox from '../components/alertbox'

const Admin:React.FC = () =>{
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('password')
    const [error,setError] = useState({title:'Ops!',description: '',on: false, function: () => {resetAlert()}})

    async function CheckPass() {
        try{
            setLoading(true)
            const response = await api.get(`/adm/users/list`, {headers:{Authorization: `Bearer ${password}`}})
            const {data} = response

            if(data){
                localStorage.setItem('did', password)
                window.location.href = '/paodeforma/add'
            }
            
            setLoading(false)
        }catch(error:any){
            setLoading(false)
            if(!error)
                setError({...error, description: 'Ocorreu um erro com os nossos servidores, tente novamente mais tarde :/', on: true})

            if(error.response)
                setError({...error, description: error.response.data.error? error.response.data.error:'Erro inesperado', on: true})
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
                <AdmText> Pão de forma </AdmText>
                <AdmDescription> pão de forma?, bisnaguinha!</AdmDescription>

            <Input placeholder='Digite sua senha' type='password' onChange={v => setPassword(v.target.value)}/>
                
            <AdmButton onClick={() => CheckPass()} style={{backgroundColor: '#655aa3'}}> {LoadingText('Entrar', loading) }</AdmButton>
            </AdmContainer>
        </Page>
    )
}

export default Admin

function LoadingText(text:string, loading:boolean){
    return !loading ? text : <ReactLoading type={'spin'} color={'#fff'} height={'20px'} width={'20px'} />
}