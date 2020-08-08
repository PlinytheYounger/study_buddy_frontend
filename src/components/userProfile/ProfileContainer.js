import React, {Component} from 'react';
import '../../css/main.css';
import Header from '../Header';
import Footer from '../Footer';
import Interviews from './Interviews';
import StudyGuide from './StudyGuide';
import ConceptCards from './ConceptCards';


class Profile extends Component {
    render() {
        console.log(this.props.user)
        return(
            <div className="profile-container">
                <Header />
                <section className="container-fluid pb-4">
                    <h2>Welcome, {this.props.user && this.props.user.name}</h2>
                </section>

                <section className="container-fluid pb-4 pt-4">
                    <Interviews user={this.props.user}/>
                </section>
                
                <section className="container-fluid pb-4 pt-4">
                    <StudyGuide user={this.props.user}/>
                </section>
                
                <section className="container-fluid pb-4 pt-4">
                    <ConceptCards user={this.props.user} handleConceptUpdate={this.props.handleConceptUpdate}/>
                </section>
    
                <Footer />
            </div>
        )
    }
    }

export default Profile;