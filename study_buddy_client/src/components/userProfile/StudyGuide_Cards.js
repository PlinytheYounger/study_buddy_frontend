import React, {Component} from 'react';
import '../../css/main.css'

class StudyGuideCards extends Component {
    render() {
        return (
            <div className="studyguide-cards">
                <h4>Concept: </h4>
                <h4>Practice Problem: </h4>
                <button>Schedule time to practice!</button>
                <button>Update Concept Progress</button>
            </div>
        )  
    }
}

export default StudyGuideCards;