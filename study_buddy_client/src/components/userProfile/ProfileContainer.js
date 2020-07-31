import React, {Component} from 'react';
import '../../css/main.css';
import Header from '../Header';
import Footer from '../Footer';
import Interviews from './Interviews';
import StudyGuide from './StudyGuide';
import ConceptCards from './ConceptCards';

class Profile extends Component {

    render() {
        return(
            <div className="profile-container">
                <Header />
                <h2>Welcome, {this.props.loggedInStatus}</h2>
                <div className="jump-to">
                    <h4>Jump to: Upcoming Interviews / Study Guide / Concept Comprehension</h4>
                </div>
    
                <Interviews />
    
                <StudyGuide />
    
                <ConceptCards />
    
                <Footer />
            </div>
        )
    }
    }

export default Profile;