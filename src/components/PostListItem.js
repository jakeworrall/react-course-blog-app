import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const PostListItem = ({ id, title, createdAt, lastEditedAt, path }) => (
    <Link className="list-item" to={path + id}>
        <h3 className="list-item__title">{title}</h3>
        <div>
            <h3 className="list-item__data">{moment(createdAt).format('MMMM Do, YYYY')} at {moment(createdAt).format('HH:mm')}</h3>
            {createdAt !== lastEditedAt && <p className="list-item__subtitle">Last edited: {moment(lastEditedAt).format('MMMM Do, YYYY')} at {moment(lastEditedAt).format('HH:mm')}</p>}
        </div>
    </Link>
);

export default PostListItem;