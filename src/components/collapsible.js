import React, { useState } from 'react';

const CollapsibleContent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button className="collapsible" onClick={toggleContent}>
                Toggle Content
            </button>
            {isVisible && (
                <p>TEST</p>
            )}
        </div>
    );
};

export default CollapsibleContent;
