import axios from 'axios'
import React, { useEffect, useState } from "react";
// import CreateButton from "../../components/CreateButton";
import { useNavigate, useParams } from 'react-router-dom';


export const FormEditTweet = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getTweetById();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.patch(`http://localhost:8000/tweet/update/${id}`, {
                title,
                desc
            })
            navigate("/")
        } catch(error){
            console.log(error);
        }
    }

    const getTweetById = async () => {
        const response = await axios.get(`http://localhost:8000/tweet/${id}`);
        setTitle(response.data.title);
        setDesc(response.data.desc);
    };

    return (
        <div className = "edit">
            <h2>Edit this tweet</h2>
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
                <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </div>
        
    )
}