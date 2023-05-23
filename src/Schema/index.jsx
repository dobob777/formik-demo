import * as Yup from 'yup';

export const valiDateSchema = Yup.object({
    name: Yup.string().min(2).max(5).required('Enter A Name'),
    password: Yup.string().required('Enter A Password')
})