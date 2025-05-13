import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const handleBtn = () => {
        navigate('/');
    }
    return (
        <div>
            <h2>this is contact page</h2>
            <button className="btn btn-ghost bg-blue-500" onClick={handleBtn}>Home Page</button>
        </div>
    );
};

export default Contact;