import React, { useState } from 'react'
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function PostForm({isCreatePost}) {

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
  
  const quill = new Quill('#editor',{
    modules:{
      toolbar: toolbarOptions
    }
  })

  return (
    <section className='postForm'>
      <h2>{isCreatePost? "Create Post" : "Edit Post"}</h2>
      <form>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Summary"/>
        <div className='cover'>
          <label>Cover Image: </label>
          <input type="file" className='notInclude'/>
        </div>
        <ReactQuill
          modules={{ 
            toolbar: toolbarOptions
          }}
        />
      <div className='action'>
        {
          isCreatePost 
          ? <button className='publishBtn'>Publish</button>
          :
          <>
            <button className='editBtn'>Edit</button>
            <button className='deleteBtn'>Delete</button>
          </>
        }
      </div>
      </form>
    </section>
  )
}

export default PostForm