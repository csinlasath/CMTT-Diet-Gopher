import UserProfile from "../user/userprofile";

const UserJumbotron = (props) => (
    <div className='jumbotron jumbotron-fluid' id='user-jumbotron'>
        <div className='container'>
            <h1 className='display-8 text-center'>Create your Profile.</h1>
            {props.children}
            <button type='button' className='btn btn-outline-dark save-btn'>Save</button>
        </div>
        <style jsx>{`
            #user-jumbotron {
               
            }

            .save-btn {
                display: block;
                margin: 0 auto;
            }
        `}</style>
    </div>
);

export default UserJumbotron;