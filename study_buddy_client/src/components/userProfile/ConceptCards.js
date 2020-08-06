import React, {Component} from 'react';
import '../../css/main.css';
import axios from 'axios';

class ConceptCards extends Component {
    state = {
        name: "",
        category: "",
        comprehension: "",
        user_id: ""
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        const {
            category,
            name,
            comprehension
        } = this.state;

        axios.put(`http://localhost:3001/users/${this.props.user.id}/concepts`, {
            concept: {
                name: name,
                category: category,
                comprehension: comprehension,
                user_id: this.props.user.id
            }
        }).then(response => {
            // JSON.parse
            console.log(response)
        }).catch(error => {
            console.log("registration error", error);
        })
    }

    render() {
        return (
            <div className="concept-card container-fluid pt-4">
                <h2>Concept Comprehension</h2>
                {this.props.user.concepts && this.props.user.concepts.map(concept => {
                    return (
                        <div className="concept-cards container-fluid pt-4 pb-4">
                            <h3>{concept.name}</h3>
                            <h3>{concept.comprehension}</h3>
                            {/* <div className="progress" style={{height: '25%', margin: '5%'}}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow={concept.comprehension} aria-valuemin="0" aria-valuemax="100">{`${concept.comprehension}%`}</div>
                            </div> */}
                            <button onClick={this.handleClick}>Update Concept Progress</button>
                            <div>
                                <form onSubmit={this.onSubmit}>
                                    <input type="text" name="comprehension" value={this.state.comprehension} onChange={this.handleChange} placeholder={concept.comprehension} required />
                                    <input type="text" name="name" value={concept.name} onChange={this.handleChange} />
                                    <input type="text" name="category" value={concept.category} onChange={this.handleChange} />
                                    <button type="submit"></button>
                                </form>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default ConceptCards;