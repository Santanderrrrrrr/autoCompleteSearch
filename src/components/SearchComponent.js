import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/actions/actions';
import '../styles/searchStyle.css';




const SearchComponent=()=> {


    const [suggestions, setSuggestions] = useState([]);

    const [text, setText] = useState ('');
    const users = useSelector((state)=>state.allUsers.users);
    
    const dispatch = useDispatch();
  


//~~~~~~~~~~~~~~~~~fetchUsers definition~~~~~~~~~~~~~~~~~~~~~~~~~~

    const fetchUsers = async()=>{
        const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
            ).catch((err)=>{
                console.log("err", err);
            });
        dispatch(setUsers(response.data));
        
        

    }
    

   
//~~~~~~~~~~~~~~useEffect~~~~~~~~~~~~~~~~~~~~~~~~~~


    useEffect(()=>{
        fetchUsers();
        
    }, []);

    console.log("Here your users is from redux", users)


//~~~~~~~~~~~~~~onChangeHandler~~~~~~~~~~~~~~~~~~

    const onChangeHandler =(text)=>{
        let matches = [];
        if(text.length>0){
          matches = users.filter(user=>{
            const regex = text.toLowerCase();
            return user.name.toLowerCase().includes(regex);
        })

        }
        console.log('matches', matches);
        setSuggestions(matches);
        setText(text);
    }







    return (
        <div className="searchBar">
            <div className="inputNHit">
                <input type="text" className="inputField" onChange = {e=> onChangeHandler(e.target.value)}
                    value = {text}/>
                <button className="hit">Search</button> 
            </div>   
                {suggestions && suggestions.map((suggestion, i)=>
                    <div key = {i} className="Suggestion">{suggestion.name}</div>)}
            
        </div>
  )
}

export default SearchComponent
