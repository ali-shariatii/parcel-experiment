import { formatDistanceToNow } from 'date-fns';

const date = '1991-12-21 00:00:01';

document.body.innerHTML = `<h3> You are ${formatDistanceToNow(new Date(date))} old</h3>`;