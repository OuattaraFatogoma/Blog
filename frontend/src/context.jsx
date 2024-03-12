import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
const url = "https://api-petitblogger.onrender.com/api/v1/posts";

const data = JSON.parse(window.localStorage.getItem("data"));

export const AppProvider = ({children}) =>{
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(data ? data.user : null);

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(url);
            const posts = response.data;
            setPosts(posts);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
        
    }

    useEffect(()=> {
        fetchPosts();
    }, []);

    return (
        <AppContext.Provider value={{
            posts,
            isLoading,
            user,
            setUser,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext); 
}