import axios from 'axios'

class NoticeApi{
    async list(){
        const res = await axios.get('/notice?type=')

        return res?.data
    }
}

const noticeApi = new NoticeApi();

export default noticeApi




