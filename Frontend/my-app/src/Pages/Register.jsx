import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Register.css';

export const Register = () => {
    return (
        <div>
            <div className='centregi'>
                <h1 >Register Form</h1>
            </div>
            <div> 
                &nbsp; &nbsp;<p>you are Not Docter ? <Link to='/Login'>ClickHere</Link></p>
            </div>
            <form>
                <div> &nbsp;
                &nbsp;<label htmlFor=''>Name :</label>
                &nbsp;<input type='text' id='drName' name='drName'/>
                </div>
                <br></br>
                <div>
                    &nbsp;<button type='submit' id='drbtnsubmit'>Submit</button> &nbsp;
                    &nbsp;<button type='reset' id='drbtnreset'>Re-Set</button>
                </div>
            </form>

        </div>
    )
}
