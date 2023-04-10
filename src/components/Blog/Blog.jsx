import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='title-my'>My Questions and Answer</h2>
            <div className='actual-part'>
            <div>
                <h2 className='questions'>When should you use Context API?</h2>
                <p className='answer'>Context API works best for situations where a lightweight solution is desirable. 
                Context API is also well suited for use cases that involve passing data from a parent to a deeply nested child.
                 Context API provides a scalable and simple framework, making it a great way to implement shared data between components.</p>
            </div>
            <div>
                <h2 className='questions'>What is Custom Hook?</h2>
                <p className='answer'>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. 
                    Let's take a look at some major differences between a custom React JS hook and React JS components:
                     A custom hook does not require a specific signature.</p>
            </div>
            <div>
                <h2 className='questions'>What is the uses of useRef , useMemo?</h2>
                <p className='answer'>A very common use case for using useRef is for when, suppose you click on a button, and then on its click you want an input to come into focus.
                     To do this, we would need to access the DOM element of input and then call its function focus() to focus the input.
                     The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. 
                     When changing the count or adding a todo, you will notice a delay in execution.</p>
            </div>
            </div>

        </div>
    );
};

export default Blog;