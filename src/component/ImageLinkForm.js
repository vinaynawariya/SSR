import React from 'react';
import './form.css';

const ImageLinkForm = ({inputChange, onSubmit}) => {
    return(
        <div className="ma4 mt0">
            <p className="f3">
                {`this asdf sadf asf `}
            </p>
            <div className="center">
            <div className="pa4 form br3 shadow-5 center">
                <input type="tex" className="f4 pa2 w-70 center" onChange={inputChange}/>
                <button className="w-30 grow f4 link pv2 ph3 dib white bg-light-purple" onClick={onSubmit}>Select</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;