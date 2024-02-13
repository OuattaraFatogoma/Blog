import axios from 'axios';
import { useEffect, useState } from 'react'
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';


function PostForm() {
  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:5000/api/v1/posts/";
  const {token} = JSON.parse(window.localStorage.getItem("data"));

  const fetchPost = async () =>{
    try {
      const response = await axios.get(url+id);
      const post = response.data;
      setTitle(post.title);
      setSummary(post.summary);
      setContent(post.content);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(()=>{
    if(id) fetchPost();
  }, []) 

  const handlePublish = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file[0]);
    data.append('title', title);
    data.append('summary', summary);
    data.append('content', content);
    const option = {
      headers:{
        'authorization': `Bearer ${token}`,
        'content-type': "multipart/form-data"
      }
    }
    try {
      const response = await axios.post(url, data, option);
      const {post} = response.data;
      navigate(`/post/${post._id}`);
    } catch (error) {
      console.log(error.response.data.message);
    }
   
  }
  const handleEdit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if(file) data.append('file', file[0]);
    data.append('title', title);
    data.append('summary', summary);
    data.append('content', content);
    const option = {
      headers:{
        'authorization': `Bearer ${token}`,
        'content-type': "multipart/form-data"
      }
    }
    try {
      const response = await axios.patch(url+id, data, option);
      const {post} = response.data;
      navigate(`/post/${post._id}`);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }



  const handleDelete = async (e) => {
    e.preventDefault();
    const option = {
      headers:{
        'authorization': `Bearer ${token}`,
        'content-type': "multipart/form-data"
      }
    }
    try {
      const response = await axios.delete(url+id, option);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  // create a qill instance
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['link', 'image'],
    ['clean']                                         // remove formatting button
  ];
  

  return (
    <section className='postForm'>
      <h2>{id ? "Edit Post" : "Create Post"}</h2>
      <form>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <input type="text" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required/>
        <div className='cover'>
          <label>Cover Image: </label>
          <input type="file" accept="image/*" name="file" className='notInclude' onChange={(e) => setFile(e.target.files)}/>
        </div>
        <ReactQuill
          theme="snow"
          modules={{ 
            toolbar: toolbarOptions
          }}
          value={content}
          onChange={setContent}
          required
        />
      <div className='action'>
        {
          id 
          ? 
          <>
            <button className='editBtn' onClick={handleEdit}>Edit</button>
            <button className='deleteBtn' onClick={handleDelete}>Delete</button>
          </>
          :
          <button className='publishBtn' onClick={handlePublish} >Publish</button>
        }
      </div>
      </form>
    </section>
  )
}

export default PostForm