import React from 'react';
import "./Profile.css"

function Profile(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // ???
    }

    return (
        <form onSubmit={e => { handleSubmit(e) }}>
            <label>Name</label>
            <br />
            <input
                name='name'
                type='text'
            />
            <br />
            <label>Email</label>
            <br />
            <input
                name='email'
                type='text'
            />
            <br />
            <label>Gender</label>
            <br />
            <input
                name='gender'
                type='text'
            />
            <br />
            <label>Age</label>
            <br />
            <input
                name='age'
                type='number'
            />
            <br />
            <label>Photo URL</label>
            <br />
            <input
                name='url'
                type='text'
            />
            <br />
            <input
                className='submitButton'
                type='submit'
                value='Submit'
            />
        </form>
    )
}

export default Profile;