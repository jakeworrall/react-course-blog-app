import React from 'react';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            content: props.post ? props.post.content : '',
            createdAt: props.post ? props.post.createdAt : null,
            error: ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({content}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.content){
            this.setState(() => ({error: "Please provide a title and some content"}));
        } else {
            this.props.onSubmit({
                title: this.state.title,
                content: this.state.content,
                createdAt: this.state.createdAt || moment().valueOf(),
                lastEditedAt: moment().valueOf()
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus
                    className="text-input"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea
                    className="textarea"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.onContentChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Post</button>
                </div>
            </form>
        );
    }
}