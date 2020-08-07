import React, {Component} from 'react';
import '../../css/main.css'
import StudyGuideCards from './StudyGuide_Cards';
import moment from 'moment';

class StudyGuide extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div className="container-fluid studyguide-container pt-5 pb-5">
                <h2><span>XX </span>Days Left to your next interview!</h2>
                {/* <StudyGuideCards /> */}
                <div className="container-fluid study-guide-card">
                    {/* <StudyGuideCards user={this.props.user}/> */}
                    <button>Schedule time to practice!</button>
                </div>
            </div>
        )
    }
}

export default StudyGuide;