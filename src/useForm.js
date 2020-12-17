import { useState, useEffect } from 'react';

const useForm = (callback, validateForm) => {
    const [values, setValues] = useState({
        fullName: '',
        mailID: '',
        mobileNumber: '',
        userComments: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateForm(values));
        setSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            callback(values);
            setValues({
                fullName: '',
                mailID: '',
                mobileNumber: '',
                userComments: ''
            })
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;
