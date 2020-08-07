import React, {Component} from 'react';
import '../../css/main.css'

class StudyGuideCards extends Component {

    render() {
        return (
            <div className="studyguide-cards">
                {this.props.user.concepts && this.props.user.concepts.map((concept, index) => {
                    return (
                        <div className={`study-card`}>
                            <h3>{concept.name}</h3>
                            <h2>{this.props.user.concepts && concept.practice_problems.map(problem => {
                                return (
                                    <div className="problem">
                                        <p>{problem}</p>
                                    </div>
                                )
                            })}</h2>
                        </div>
                    )
                })}
            </div>
        )  
    }
}

export default StudyGuideCards;