import React from 'react';

const Blogs = () => {
    return (
        <div className="my-5">
            <div className='my-10'>
                <h1 className="text-center text-4xl font-bold ">Some Blog <span className="text-[#b40839]">Questions</span></h1>
            </div>
            <div className="my-5 py-2 px-4 md:p-8 rounded-lg bg-[#1111110D]">
                <div className="bg-white rounded-lg p-4 my-2">
                    <h1 className="text-2xl font-bold my-3">1. Tell us the differences between uncontrolled and controlled components.</h1>
                    <div className="md:flex md:justify-between md:gap-5">
                        <p className="text-lg font-semibold font-mono">
                            Uncontrolled components are handled by the DOM and controlled components are managed by React. Uncontrolled components are useful for simple forms, while controlled components are used for validation and modification of data.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">2. How to validate React props using PropTypes?</h1>
                    <p className="text-lg font-semibold font-mono">
                        PropTypes is a library used to validate props passed to a React component. Import it and define PropTypes object to use.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">3. Tell us the difference between nodejs and express js.</h1>
                    <p className="text-lg font-semibold font-mono">
                        Node.js is a runtime environment for server-side JavaScript and Express.js is a framework built on top of Node.js for web development.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-2">
                    <h1 className="text-2xl font-bold my-3">4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className="text-lg font-semibold font-mono">
                        A custom hook is a reusable function created with useEffect and useState hooks that encapsulate common stateful logic in a single place. They are used to avoid repetition of logic across multiple components or to abstract complex logic into a simpler, reusable function.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;