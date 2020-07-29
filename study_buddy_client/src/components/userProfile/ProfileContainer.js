import React, {useState, useEffect} from 'react';
import axios from "axios";
import '../../css/main.css';
import Header from '../Header';
import Footer from '../Footer';
import Interviews from './Interviews';
import StudyGuide from './StudyGuide';
import ConceptCards from './ConceptCards';

function Profile() {
    const [id, setId] = useState(1);
    const [user, setUser] =useState("");

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://localhost:3000/users/${id}/`);
            console.log(response.data);  
            console.log(id) 
        }
        getData();
    })
    return(
        <div className="profile-container">
            <Header />
    <h2>Welcome, </h2>
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

export default Profile;