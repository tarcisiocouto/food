import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jeWhZ7L6xvOl4yfuwDcr7_X2iqwYhgqeYYInIcKO_jYjOHTAAEldDGgJJfao9pZ7IrOJ3G9cA1tUxcSNYKy-fpb72TABKyrFBWvFel_UKYGNyYHzXFUbunMFynenXXYx'
    }
});

