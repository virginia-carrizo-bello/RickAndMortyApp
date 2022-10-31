import { useState } from 'react';

export const useUserForm = (inicialState = {}) =>{

    const [form, setForm] = useState (inicialState);

    const handleChanges = ({target}) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    return {
        form, setForm, handleChanges,
    }
}