import axios from 'axios'
import React, { useState } from "react";
// import CreateButton from "../../components/CreateButton";
import { useNavigate } from 'react-router-dom';


export const FormCreateTweet = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post("http://localhost:8000/tweet/create", {
                title,
                desc
            })
            navigate("/")
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className = "create">
            <h2>Add a new tweet</h2>
            <form onSubmit={handleSubmit}>
                <label>Tweet title:</label> &nbsp;
                <input
                    type = "text"
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <label>Tweet desc:</label> &nbsp;
                <textarea
                    type = "text"
                    required
                    value = {desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <br/>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
        
    )
}