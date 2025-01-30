import axios from "axios";

const jokesUrl = "https://api.chucknorris.io/jokes/random"

// axios.get(url)
//     .then(res => {
//         console.log(res.data);
//     }).catch( err => {
//             console.log(err);
//     })

const fetchJoke = async(url) => {
    try {
        const res = await axios.get(url);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

fetchJoke(jokesUrl);