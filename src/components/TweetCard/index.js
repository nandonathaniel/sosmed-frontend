import React from "react";
import styles from './TweetCard.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TweetCard = ({title, date, desc, id}) => {
    const cardStyle = {
        width: "40rem"
    }
    const navigate = useNavigate();

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/tweet/delete/${id}`);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                <p className="card-text">{desc}</p>
                <button onClick={() => deleteUser(id)} class="btn btn-danger">Delete</button>	&nbsp;
                <a href={`edit/${id}`} class="btn btn-primary">Update</a>
             </div>
        </div>
    )
}