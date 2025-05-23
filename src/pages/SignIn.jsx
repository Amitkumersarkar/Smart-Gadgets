import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email);
        // console.log(password);
        if (email === 'amit@gmail.com' && password === '1234') {
            navigate('/profile');
            //backend data passing
            {
                const user = {
                    name: 'amrita',
                    email: 'amit@gamil.com',
                    city: 'dhaka'
                }
                navigate('/profile', { state: user });

            }
        }
        else {
            navigate('/');
        }
    }
    return (
        <div className="flex flex-col w-75 bg-sky-500 shadow-blue-200 p-10 mt-10 rounded-xl text-center">
            <h1 className="text-3xl font-bold pb-4">User Sign In</h1>
            <form onSubmit={handleSubmit} >
                <input className="pb-2 text-center" onChange={handleEmailChange} type="email" id="email" name="Email" placeholder="Enter Your Email" />
                <input className="pb-2 text-center" onChange={handlePasswordChange} type="password" id="password" name="Password" placeholder="Enter Your Password" />
                <button className="btn btn-ghost bg-amber-600 mt-4">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;