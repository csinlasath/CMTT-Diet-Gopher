import Useredit from "../useredit/Edit";

const EditJumbotron = (props) => (
    <div className='jumbotron jumbotron-fluid' id='edit-jumbotron'>
        <div className='container'>
            <h1 className='display-8 text-center'>Edit your Profile.</h1>
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

export default EditJumbotron;