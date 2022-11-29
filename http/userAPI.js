import {$host} from "./index";

export const getAllComent = async () => {
    const response = await $host.get('/test')
    return response.data;
}

export const sendVacancy = async (fam, name, otch, date, phone, name_vacancy) => {
    const responce = await $host.post('/sendvacancy', {
        fam: fam,
        name: name,
        otch: otch,
        date: date,
        phone: phone,
        name_vacancy: name_vacancy
    })
}
