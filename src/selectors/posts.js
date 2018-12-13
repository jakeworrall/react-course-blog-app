import moment from 'moment';

export default (posts, { text, searchBy, startDate, endDate }) => {
    return posts.filter((post) => {
        const createdAtMoment = moment(post.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        let textMatch;
        if (searchBy === 'title'){
            textMatch = post.title.toLowerCase().includes(text.toLowerCase());
        } else if (searchBy === 'content'){
            textMatch = post.content.toLowerCase().includes(text.toLowerCase());
        } else{
            textMatch = post.title.toLowerCase().includes(text.toLowerCase()) ||
                post.content.toLowerCase().includes(text.toLowerCase());
        }
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    });
};