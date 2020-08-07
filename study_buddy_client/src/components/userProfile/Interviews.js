import React, {Component} from 'react';
import '../../css/main.css';
import axios from 'axios';

class Interviews extends Component{
    state = {
        company_name: "",
        interview_date: "",
        interview_type: "",
        user_id: ""
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            company_name,
            interview_date,
            interview_type,
        } = this.state;

        axios.post(`http://localhost:3001/users/${this.props.user.id}/interviews`, {
            interview: {
                company_name: company_name,
                interview_date: interview_date,
                interview_type: interview_type,
                user_id: this.props.user.id
            }
        }).then(response => {
            const interview = response.data.interview;
            this.setState({
                interviews: [...this.props.user.interviews, interview]
            })
        }).catch(error => {
            console.log("registration error", error);
        })
    }

    handleDelete = (id, index) => {
        axios.delete(`http://localhost:3001/users/${this.props.user.id}/interviews/${id}`)
            .then(response => response)
            .then(data => {
                console.log(data)
                this.setState({
                    interviews: [
                        ...this.props.user.interviews.slice(0, index),
                        ...this.props.user.interviews.slice(index + 1)
                    ]
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container-fluid interview-container pt-4 pb-5">
                <h2>Upcoming Interviews</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Interview Date</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Interview Type</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.user.interviews && this.props.user.interviews.map((interview, index) => {
                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td>{interview.interview_date}</td> 
                                <td>{interview.company_name}</td>
                                <td>{interview.interview_type}</td>
                                <td><button onClick={(e) => {this.handleDelete(interview.id, index)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

                <div className=" container-fluid interview-create-form pb-4">
                    <button onClick={this.onClick} className="btn btn-danger" data-toggle="collapse" href="#interview-collapse" aria-expanded="false" aria-controls="interview-collapse">Create new Interview!</button>
                    <form onSubmit={this.handleSubmit} className="collapse" id="interview-collapse">
                        <input type="text" name="company_name" placeholder="Company" value={this.state.company_name} onChange={this.handleChange} required/>
                        <input type="text" name="interview_date" placeholder="Interview Date YYYY-MM-DD" value={this.state.interview_date} onChange={this.handleChange}/>
                        <input type="text" name="interview_type" placeholder="Interview Type" value={this.state.interview_type} onChange={this.handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Interviews;