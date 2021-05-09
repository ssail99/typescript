import React,{useState} from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps={
    onSubmitUsername :(username:string)=> void;
}

function  GithubUsernameForm({onSubmitUsername}:GithubUsernameFormProps){
    const [input,setInput]= useState('');
    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmitUsername(input);

    }
    const onChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        setInput(e.target.value);

    }

    return (
        <form onSubmit={onSubmit} className="GithubUsernameFrom">
            <input onChange={onChange} value ={input} placeholder="GITHUB 계정명을 입력해주세요"/>
            <button type ="submit">조회</button>
        </form>
    )
}