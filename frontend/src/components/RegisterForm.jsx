import React from 'react'

function RegisterForm() {
  return (
    <section>
      <form className='userForm'>
        <h2>REGISTER</h2>
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='email'/>
        <input type="text" placeholder='password'/>
        <select name='role'>
          <option value="reader">Reader</option>
          <option value="writer">Writer</option>
        </select>
        <button className='registerBtn'>Register</button>
      </form>
    </section>
  )
}

export default RegisterForm