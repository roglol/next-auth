import {useState} from 'react';
import {loginUser} from '../libs/auth';
import Router from 'next/router';

const LoginForm = () =>{
    const [email, setEmail] = useState('Rey.Padberg@karina.biz')
    const [password, setPassword] = useState('ambrose.net')
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

     const handleSubmit = (e) =>{
       e.preventDefault()
       setError('')
       setLoading(true)
       console.log(email,password)
       loginUser(email,password).then(() =>{
            Router.push("/profile")
       })
       .catch(err =>{
        setLoading(false)
          setError(err.response.data)
       })
     }
   
    return(
        <form onSubmit={handleSubmit}>
        <div><input type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div><input type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit" disabled={isLoading}>Login</button>
        {error && <div>{error}</div>}
        </form>
    )
}

export default LoginForm;