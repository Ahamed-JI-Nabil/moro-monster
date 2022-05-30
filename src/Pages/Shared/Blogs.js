import React from 'react';

const Blogs = () => {
    return (
        <div className='p-12'>
            <div>
                <h2 className='text-2xl leading-loose'>How will you improve the performance of a React Application?</h2>
                <p>Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import Windowing or list virtualization in React. Lazy loading images in React.</p>
            </div>
            <div>
                <h2 className='text-2xl leading-loose'>What are the different ways to manage a state in a React application?</h2>
                <p>1.Redux</p>
                <p>2.Recoil</p>
                <p>3.React Hooks</p>
            </div>
            <div>
                <h2 className='text-2xl leading-loose'>How does prototypical inheritance work?</h2>
                <p>Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
            </div>
            <div>
                <h2 className='text-2xl leading-loose'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>Whenever the state changes, React re-renders the component to the browser. Before updating the value of the state, we need to build an initial state setup. Once we are done with it, we use the setState() method to change the state object. It ensures that the component has been updated and calls for re-rendering of the component.</p>
            </div>
            <div>
                <h2 className='text-2xl leading-loose'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>Using Find.</p>
            </div>
            <div>
                <h2></h2>
                <p></p>
            </div>
        </div>
    );
};

export default Blogs;