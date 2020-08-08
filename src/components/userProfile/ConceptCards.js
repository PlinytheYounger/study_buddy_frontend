import React, {Component} from 'react';
import '../../css/main.css';
import axios from 'axios';

class ConceptCards extends Component {
    state = {
        name: "",
        category: "",
        id: "",
        comprehension: "",
    }

    handleChange = (event, name, category, id) => {
        event.preventDefault();
        this.setState({
            name: name,
            category: category,
            id: id,
            comprehension: event.target.value,
            user_id: this.props.user.id
        });
    }

    handleUpdate = (event) => {
        event.preventDefault();
        const {
            name,
            category,
            id,
            comprehension,
        } = this.state;

        axios.put(`http://localhost:3001/users/${this.props.user.id}/concepts/${id}`, {
            concept: {
                name: name,
                category: category,
                id: id,
                comprehension: comprehension,
            }
        }).then(response => {
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
                            <div className="progress" >
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${concept.comprehension}%`}} role="progressbar" aria-valuenow={concept.comprehension} aria-valuemin="0" aria-valuemax="100">{`${concept.comprehension}%`}</div>
                            </div>
                            <div>
                            <button className="btn btn-primary mt-5" data-toggle="collapse" href={`#conceptCollapse_${concept.id}`} aria-expanded="false" aria-controls={`#conceptCollapse_${concept.id}`}>Update Concept Progress</button>

                            <form className="collapse" id={`conceptCollapse_${concept.id}`} onSubmit={this.handleUpdate}>
                                <input type="text" name="comprehension" value={this.state.comprehension} onChange={(e) => this.handleChange(e, concept.name, concept.category, concept.id)} placeholder={concept.comprehension} required />
                                <button className="btn btn-secondary" type="submit" >Update</button>
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