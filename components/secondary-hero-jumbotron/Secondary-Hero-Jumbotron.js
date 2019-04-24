
const SecondaryHeroJumbotron = (props) => (
    <div className='jumbotron jumbotron-fluid' id='secondary-hero-jumbotron'>
        <div className='container'>
            <div className='container'>
                <h1 className='display-8 text-center'>Search nutrition facts on all kinds of food.</h1>
                <p className='lead text-center'>Special Diets.  Allergies.  All covered.</p>
            </div>
            <form>
                <div className='form-group'>
                    <label htmlFor='secondary-hero-search' className='form-control text-center'>Search</label>
                    <div className='input-group' id='secondary-hero-search'>
                        <input type='text' className='form-control bg-light' name='secondary-hero-search' placeholder='Search for Food Nutritional Facts' id='secondary-hero-search-field'></input>
                        <div className='input-group-append'>
                            <button className='btn btn-outline-dark' id='secondary-hero-search-btn'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <style jsx>{`
            #secondary-hero-jumbotron {
                height: 300px;
            }

             #secondary-hero-search {
                margin: 0 auto;
                width: 80%;
            }
        `}</style>
    </div>
);

export default SecondaryHeroJumbotron;