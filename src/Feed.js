import React, {useState} from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import { Input } from '@material-ui/core';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
const[post, setPosts] = useState([])

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                   <CreateIcon/> 
                   <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                   </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="lightblue"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="orange"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#e8c8f7"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="green"/>
                </div>
            </div>
            
            <Post name="Ananya Singh" 
            description="This is a demo" 
            message="tired" />
        </div>
    )
}

export default Feed
