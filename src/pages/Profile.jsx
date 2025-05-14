import { useLocation } from "react-router-dom";

const Profile = () => {
    // useLocation hooks to show user data
    const { state } = useLocation();
    // console.log(location.state);
    return (
        <div className="">
            <h2 className=" text-center mt-5 text-3xl font-bold">user profile</h2>
            <div className="text-center mt-5">
                <p>Name : {state.name}</p>
                <p>Phone : {state.email} </p>
                <p>User City : {state.city}</p>
            </div>
        </div>
    );
};

export default Profile;