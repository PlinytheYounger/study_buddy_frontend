import React, {Component} from 'react';
import '../../css/main.css'
import StudyGuideCards from './StudyGuide_Cards';

class StudyGuide extends Component {
    render() {
        return (
            <div className="studyguide-container">
                <h2>XX Days Left to the next interview!</h2>
                <StudyGuideCards />
            </div>
        )
    }
}

export default StudyGuide;