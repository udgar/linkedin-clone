import React, { useEffect, useState } from 'react'
import './feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './FireBase';
import { addDoc, onSnapshot, collection,FieldValue,serverTimestamp, query, orderBy, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user=useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const newPost = onSnapshot(collection(db, 'posts'), async (snapshot) => {
            let q=query(collection(db, 'posts'),orderBy('timestamp','desc'))
            let qSnapShot= await getDocs(q)
            setPosts(qSnapShot.docs.map(doc => ({ data: doc.data(), id: doc.id })));
        });
        return newPost
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        console.log(user)
        const col = collection(db, 'posts')
        const promise = addDoc(col, {
            name: user.user.displayName,
            description: "This is test",
            message: input,
            photo: 'https://media.licdn.com/dms/image/C4D03AQFO6JHyp6BXjQ/profile-displayphoto-shrink_800_800/0/1610458535423?e=2147483647&v=beta&t=7MAaBiBeen6kxBJH1KvyQIMqOt0uAl_BmLL_MfTGNFU',
            timestamp:serverTimestamp()
        })
        setInput("");
        return promise;

    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"></input>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption title="Photo" Icon={PhotoCameraIcon} color="#70B5F9"></InputOption>
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#70B5F9"></InputOption>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#70B5F9"></InputOption>
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#70B5F9"></InputOption>
                </div>
            </div>
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photo } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photUrl={photo}
                />
            ))}
            </FlipMove>

        </div>
    )
}

export default Feed
