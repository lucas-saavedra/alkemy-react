import axios from "axios";
const loginUser = async (email, password) => {
    return await axios
        .post('http://challenge-react.alkemy.org/',
            { email, password }
        );
}
export default loginUser;
