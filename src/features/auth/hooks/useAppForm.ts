import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const createSchema = (formFields: FormFieldsType[]) => {
    const commonValidators = {
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password must be must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords do not match')
            .min(8, 'Password must be must be at least 8 characters')
            .required('Password is required'),
        textInput: yup.string().required('Name is required'),
        // question: yup.string().optional(),
        // answer: ,
    }

    const validators: ValidatorsType = {}
    formFields.forEach((el) => (validators[el] = commonValidators[el]))
    return yup.object().shape(validators)
}

export const useAppForm = (formFields: FormFieldsType[]) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        formState
    } = useForm<FormValidateType>({
        resolver: yupResolver(createSchema(formFields)),
        defaultValues: {},
        mode: 'onTouched',
    })
    return {
        register,
        handleSubmit,
        errors,
        reset,
        formState
    }
}


// types

export type FormValidateType = {
    email: string
    password: string
    confirmPassword: string
    rememberMe: boolean
    textInput: string
    private: boolean
    question: string
    answer: string
}

export type FormFieldsType = 'email' | 'password' | 'confirmPassword' | 'textInput'

type ValidatorsType = {
    email?: yup.StringSchema<string, yup.AnyObject>
    password?: yup.StringSchema<string, yup.AnyObject>
    confirmPassword?: yup.StringSchema<string, yup.AnyObject>
    textInput?: yup.StringSchema<string, yup.AnyObject>
    question?: yup.StringSchema<string, yup.AnyObject>
    answer?: yup.StringSchema<string, yup.AnyObject>
}
