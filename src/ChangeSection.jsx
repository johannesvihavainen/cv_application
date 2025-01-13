import React, { useState } from 'react';

function ChangeSection( {changeSection}) {
  
    const sections = [
        'education',
        'work',
        'skills',
        'certifications'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = () => {
        const nextIndex = (currentIndex + 1) % sections.length;
        setCurrentIndex(nextIndex);
        changeSection(sections[nextIndex]);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Next</button>
        </div>
    )
}

export default ChangeSection;