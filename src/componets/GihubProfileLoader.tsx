import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules'
import { getUserProfileThunk } from '../modules/github';
import GithubProfileInfo from './GithubProfileInfo'
import GithubUsernameFrom from './GithubProfileInfo'
function GithubProfileLoader(){
    const {data,loading, error} =useSelector((state:RootState) =>state.github.userProfile);
    const dispath =useDispatch();
    const onSubmitUsername = (username:string)=>{
        dispath(getUserProfileThunk(username)));
    }
    reuturn(
        <>
        <GithubUsernameFrom onSubmitUsername={onSubmitUsername}></GithubUsernameFrom>
        {loading&& <p style={{textAlign:'center'}}>로딩중...</p>}
        {error&& <p style={{textAlign:'center'}}>에러발생...</p>}
        {data&&
        <GithubProfileInfo bio={data.bio} blog={data.blog} name={data.name} thumbnail={data.avatar_url}></GithubProfileInfo>
 }       <>
    )