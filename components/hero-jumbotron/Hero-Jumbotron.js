
const HeroJumbotron = (props) => (
    <div className='jumbotron jumbotron-fluid' id='hero-jumbotron'>
        <div className='container'>
            <h1 className='display-8 text-center'>Find food that fits your dietary needs.</h1>
            <p className='lead text-center'>Create a profile, customize your regiment, and find new foods.</p>
            <button type='button' className='btn btn-outline-dark sign-up-btn'>Sign Up</button>
        </div>
        <style jsx>{`
            #hero-jumbotron {
                height: fit-content;
            }

            .sign-up-btn {
                display: block;
                margin: 0 auto;
            }
        `}</style>
    </div>
);

export default HeroJumbotron;