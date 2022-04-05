import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='text-start ps-3'>
            <h1>What is Semantic Tag?</h1>
            <p>Semantic tag means tag with meaning.That means those HTML tag which are easily understandable by its name is  called semantic tag.semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries. <br></br>
                <strong> Examples: </strong>form,table,header etc.
            </p>

            <h2>Write the difference between Inline,Block and Inline block element. </h2>

            <div className='text-content'>
                <div>
                    <h4>Inline element:</h4>
                    <p>Inline element doesn't start with new line.It only occupies the width it requires.We can't set its width or height.<br></br>

                        <strong> Examples: </strong> anchor tag,img tag,i tag etc
                    </p>
                </div>
                <div>
                    <h4>Inline-block element:</h4>
                    <p>Inline-block element is same as inline element doesn't starts with new line. But we can set its width or height.
                        <br></br>
                    </p>
                </div>
                <div>
                    <h4 className=''>Block element:</h4>
                    <p>Block element starts with new line,occupies the whole width available. We can set its width or height.
                        <br></br>
                        <strong> Examples: </strong> p tag,h1 tag,ul tag etc
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;