import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)

    const nameRef = useRef('')
    const commentRef = useRef('')

    const handlePostReview = event => {
        event.preventDefault()

        const review = {
            name: nameRef.current.value,
            imageUrl: "https://daisyui.com/tailwind-css-component-profile-3@56w.png",
            comment: commentRef.current.value
        }

        fetch('https://young-harbor-42670.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div>
            <div className='w-96 mx-auto mt-14'>
                <h2 className='text-xl text-center font-bold mb-7'>Add Review!</h2>
                <p className='label-text'>Your Name</p>
                <input ref={nameRef} type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full " />
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Your Thoughts</span>
                    </label>
                    <textarea ref={commentRef} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    <button onClick={handlePostReview} className='bg-rose-800 text-gray-50 px-10 py-1 rounded-lg mt-6 hover:bg-rose-600'>Post Comment</button>
                </div>
            </div>
        </div>
    );
};

export default AddReview;