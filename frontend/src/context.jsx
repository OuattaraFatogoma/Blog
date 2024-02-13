import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
const url = "http://localhost:5000/api/v1/posts"
export const AppProvider = ({children}) =>{
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext); 
}