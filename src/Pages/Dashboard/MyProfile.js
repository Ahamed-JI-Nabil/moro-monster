import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

    const nameRef = useRef('')
    const numberRef = useRef('')
    const educationRef = useRef('')
    const locationRef = useRef('')
    const linkedinRef = useRef('')

    const handleUpdateInfo = event => {
        event.preventDefault()

        const updateInfo = {
            name: nameRef.current.value,
            email: user.email,
            number: numberRef.current.value,
            education: educationRef.current.value,
            location: locationRef.current.value,
            linkedin: linkedinRef.current.value,
        }


        fetch(`http://localhost:5000/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                nameRef.current.value = ''
                numberRef.current.value = ''
                educationRef.current.value = ''
                locationRef.current.value = ''
                linkedinRef.current.value = ''
            })

    }

    console.log(user);

    return (
        <div className=' mt-4'>
            <div className='w-96 mx-auto'>
                <h2 className='text-xl text-center font-bold mb-2'>Update Your Info</h2>
                <p className='label-text'>Name</p>
                <input type="text" name="name" ref={nameRef} className="input input-bordered w-full mb-2" />
                <p className='label-text'>Email</p>
                <input type="text" name="email" disabled value={user?.email} className="input input-bordered w-full mb-2" />
                <p className='label-text'>Phone Number</p>
                <input type="number" name="number" ref={numberRef} className="input input-bordered w-full mb-2" />
                <p className='label-text'>Education</p>
                <input type="text" name="education" ref={educationRef} className="input input-bordered w-full mb-2" />
                <p className='label-text'>Location (City/District)</p>
                <input type="text" name="location" ref={locationRef} className="input input-bordered w-full mb-2" />
                <p className='label-text'>LinkedIn profile link</p>
                <input type="text" name="linkedin" ref={linkedinRef} className="input input-bordered w-full" />
                <button onClick={handleUpdateInfo} className='bg-rose-800 w-full text-gray-50 px-10 py-2 rounded-lg mt-6 hover:bg-rose-600'>Update</button>
            </div>
        </div>
    );
};

export default MyProfile;