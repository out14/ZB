import axios from 'axios'

class NoticeApi{
    async noticeList(){
        const res = await axios.get('/notice?type=')

        return res?.data.data
    }

    async eventList(){
        const res = await axios.get('/event')

        return res?.data.data
    }


}

const noticeApi = new NoticeApi();

export default noticeApi




