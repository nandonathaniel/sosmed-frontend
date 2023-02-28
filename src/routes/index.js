import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App'
import { TweetListPage } from '../containers/TweetListPage'
import { FormCreateTweet } from '../containers/FormCreateTweet'
import { FormEditTweet } from '../containers/FormEditTweet'

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path ="/test" element={<App/>} />
                <Route exact path ="/" element={<TweetListPage/>}/> 
                <Route exact path ="/create" element={<FormCreateTweet/>}/>
                <Route exact path="edit/:id" element={<FormEditTweet/>}/>
            </Routes>
        </BrowserRouter>
    )
}
