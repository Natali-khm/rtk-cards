import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const createSchema = (formFields: FormFieldsType[]) => {
    const validationObject: ValidatorsType = formFields.reduce((accum: any, item) => {
        switch (item) {
            case 'email':
                accum[item] = yup.string().email('Email is not valid!').required('Field is required!')
                return accum

            case 'password':
                accum[item] = yup
                    .string()
                    .min(8, 'Password must be must be at least 8 characters')
                    .required('Password is required')
                return accum

            case 'rememberMe':
                accum[item] = yup.boolean().defined()
                return accum

            case 'confirmPassword':
                accum[item] = yup
                    .string()
                    .oneOf([yup.ref('password')], 'Passwords do not match')
                    .min(8, 'Password must be must be at least 8 characters')
                    .required('Password is required')
                return accum

            default:
                return accum
        }
    }, {})

    return validationObject
}


export const useAppForm = (formFields: FormFieldsType[]) => {

    const validateSchema = yup.object(createSchema(formFields))

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        formState
    } = useForm<Inputs>({ resolver: yupResolver(validateSchema) })

    return {
        register,
        handleSubmit,
        errors,
        reset,
        formState,
    }
}



// types 

export type FormFieldsType = 'email' | 'password' | 'rememberMe' | 'confirmPassword'


export type Inputs = {
    email: string
    password: string
    rememberMe: boolean
    radio: string
    confirmPassword: string
    textInput: string
    question: string
    answer: string
    private: boolean
}

type ValidatorsType = {
    email: yup.StringSchema<string, yup.AnyObject>
    password: yup.StringSchema<string, yup.AnyObject>
    confirmPassword: yup.StringSchema<string, yup.AnyObject>
    textInput: yup.StringSchema<string, yup.AnyObject>
    rememberMe: yup.BooleanSchema<boolean, yup.AnyObject>
    radio: yup.StringSchema<string, yup.AnyObject>
    question: yup.StringSchema<string, yup.AnyObject>
    answer: yup.StringSchema<string, yup.AnyObject>
    private: yup.BooleanSchema<boolean, yup.AnyObject>
}
