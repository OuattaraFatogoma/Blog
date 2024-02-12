import React from 'react'

function LoginForm() {
  return (
    <section>
      <form className='userForm'>
        <h2>LOGIN</h2>
        <input type="text" placeholder='username'/>
        <input type="text" placeholder='password'/>
        <button>Login</button>
      </form>
    </section>
  )
}

export default LoginForm