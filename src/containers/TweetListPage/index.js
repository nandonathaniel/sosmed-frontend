import React, { useEffect, useState } from "react";
import { TweetCard } from "../../components/TweetCard";
import { apiGetTweetList } from "./api";

export const TweetListPage = () => {
    const [tweetList, setTweetList] = useState([])

    const getTweetList = () => {
        apiGetTweetList().then(
            result => {
                // console.log(result.data)
                setTweetList(result.data)
            }
        )
    }

    useEffect(() => {
        getTweetList()
    }, [])

    // console.log("tweetList: ", tweetList)

    return (
        // <TweetCard title="Tweet 1" date="23 Feb" desc="Halo semua!"/>
        <>
        
        <div styles="height: 200px;
                    width: 400px;
                    background: black;

                    position: fixed;
                    top: 50%;
                    left: 50%;
                    margin-top: -100px;
                    margin-left: -200px;">
            <h1> List of tweets </h1>
            { tweetList.length && tweetList.map((data) => {
                return (
                    <TweetCard title={data.title} date={data.date} desc={data.desc} id = {data.id}/>
                )
            })}
            { !tweetList.length && <h1>No tweet</h1>}
            <a href="/create">
                <button type="button" class="btn btn-primary">Add new tweet</button>
            </a>
        </div>
        
        </>
        
    )
}