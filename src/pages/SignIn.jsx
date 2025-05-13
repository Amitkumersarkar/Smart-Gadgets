import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <div >
            <h1 className="text-2xl font-bold">User Sign In</h1>
            <form onSubmit={handleSubmit} >
                <input onChange={handleEmailChange} type="email" id="email" name="Email" placeholder="Enter Your Email" />
                <input onChange={handlePasswordChange} type="password" id="password" name="Password" placeholder="Enter Your Password" />
                <button className="btn btn-ghost bg-amber-600 ml-2">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;