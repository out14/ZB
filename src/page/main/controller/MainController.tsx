import { useSuspenseQuery } from '@tanstack/react-query';
import noticeApi from "@package/api/api.notice";
import {contentApi} from "@package/api";
import {useContext} from "react";
import {ModalContext} from "@package/util";
import {ModalContent} from "@src/page/main";



export const MainController = () => {

    const { confirm,newModal,closeModal } = useContext(ModalContext);

    const {data:noticeData }=useSuspenseQuery({
        queryFn: async ()=> await noticeApi.list() ?? 'error' ,
        queryKey:["type"]
    })

    // const { data:cadData } =useSuspenseQuery({
    //     queryFn: async ()=> await contentApi.cad() ??'a',
    //     queryKey:["cad"]
    // })

    // const { data:cgrData } =useSuspenseQuery({
    //     queryFn: async ()=> await contentApi.cgr() ??'a',
    //     queryKey:["cgr"]
    // })

    // const {data:calendarData}=useSuspenseQuery({
    //     queryFn:async ()=> await contentApi.calendar() ??'a',
    //     queryKey:["calendar"]
    // })

    const handleModal = async (data) =>{
        await newModal({
            props:{
                // title:data.Name,
                // content:data.Description,
                title:'팝업 타이틀',
                content:<ModalContent data={data}/>,
                onClose:()=>closeModal(),
                onOk:()=>confirm()
            }
        })
    }

    // const copySchedule = JSON.parse(JSON.stringify([...calendarData])) as ICategory[]
    // const copySchedule = JSON.parse(JSON.stringify([...calendarData]))?.map( (e)=>({
    //     ...e,
    //     StartDay:e?.StartTimes? e?.StartTimes[0] : ''
    // } ))

    return {
        noticeData,
        // cadData,
        // cgrData,
        // calendarData,
        // copySchedule,
        handleModal
    };
};

