import axios from'axios';
const instance=axios.create(
    {
        baseURL:"http://api.themoviedb.org/3"
    }
);

export default instance;//so id u use one default instance so u dont need to import it u no need to export axios as default suggest that u export axios 