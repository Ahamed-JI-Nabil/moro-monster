import React, { useEffect, useState } from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://young-harbor-42670.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>Customer <span className='text-rose-500'>Review</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6 p-4 px-16'>
                {reviews.map(review =>
                    <>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={review.imageUrl} alt="Avatar Tailwind CSS Component" />
                                </div>
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div>
                <h2 className='text-center text-3xl font-bold mt-20 mb-14'>Give Us Your <span className='text-rose-500'>Thoughts</span></h2>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:justify-items-center gap-4 m-6 mt-0 pt-0 p-4 px-16'>
                    <div>
                        <input type="text" placeholder="Your Name..." className="input input-bordered input-error w-80 max-w-xs mb-4" />

                        <form>
                            <div className="mb-4 w-80 max-w-xs bg-gray-50 rounded-lg border-gray-200 ">
                                <div className="bg-white rounded-t-lg ">
                                    <label for="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows="4" className="input input-bordered input-error w-80 max-w-xs" placeholder="Write your comment..." required=""></textarea>
                                </div>
                                <div className="flex justify-end items-center py-2 px-3">
                                    <PrimaryButton>Post Comment</PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;