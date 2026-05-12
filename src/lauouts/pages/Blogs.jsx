import React from 'react';

const Blogs = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold">
                    What is useState and how does it work in React?
                </h2>
                <p className="mt-3 text-gray-600">
                    useState is a React Hook used to store component state.
                    When the state changes, React re-renders the component
                    and updates the UI.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold">
                    What is the purpose of useEffect in React?
                </h2>
                <p className="mt-3 text-gray-600">
                    useEffect is used for side effects such as fetching data,
                    updating the DOM, timers, and subscriptions. It runs
                    after rendering.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold">
                    What is a custom hook in React and when should you use one?
                </h2>
                <p className="mt-3 text-gray-600">
                    A custom hook is a reusable JavaScript function that uses
                    React hooks inside it. Use it when the same logic needs to
                    be shared across multiple components.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold">
                    Difference between controlled and uncontrolled components?
                </h2>
                <p className="mt-3 text-gray-600">
                    Controlled components are managed by React state.
                    Uncontrolled components store data inside the DOM.
                    Controlled components are usually better because they give
                    more control and predictable behavior.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold">
                    Tell us something about useFormStatus()
                </h2>
                <p className="mt-3 text-gray-600">
                    useFormStatus is used with React forms. It helps track
                    whether a form is currently submitting so loading states
                    and disabled buttons can be handled easily.
                </p>
            </div>
        </div>
    );
};

export default Blogs;