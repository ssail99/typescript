import React,{FormEvent, useState} from 'react';

type TodoInertProps ={
    onInsert :(text:string) => void;
}

function TodoInert ({onInsert}:TodoInertProps){
    const [value, setValue]=useState('');
    const onChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);
};

    const onSubmit = (e:FormEvent) =>{
        e.preventDefault();
        onInsert(value);
        setValue('');
    };



    return (
        <form onSubmit={onSubmit}>
            <input 
            placeholder="할일을 입력하세요"
            value={value}
            onChange={onChange}>
            </input>
            <button type="submit">등록</button>
        </form>


    );
};

export default TodoInert