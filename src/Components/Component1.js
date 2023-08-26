import React, { useRef } from 'react';

function Component1(props) {
    let comp1ParentEl = useRef(),
        comp1HeadingEl = useRef(),
        comp1ButtonEl = useRef();

    function clickEvent() {
        console.log(props.el);
        console.log(comp1ParentEl);
        console.log(comp1HeadingEl);
        console.log(comp1ButtonEl);

        comp1HeadingEl.current.innerHTML = props.name;

    }

    return (
        <div ref={comp1ParentEl} className='Comp1Parent'>
            <h2 ref={comp1HeadingEl} className='comp1Heading'>Comp1</h2>
            <button ref={comp1ButtonEl} className='comp1Button' onClick={clickEvent}>Click</button>
        </div>
    );
}

export default Component1;