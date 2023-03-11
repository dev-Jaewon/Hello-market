import { ChangeEvent, useState } from "react";

interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    }[];
    custom?: {
        isValid: (value: string) => boolean;
        message: string;
    };
}

export type ErrorRecord<T> = Partial<Record<keyof T, string>>;
export type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
    validations?: Validations<T>;
    initialValues?: T;
    onSubmit?: () => void;
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({});

    const handleChange =
        <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
        (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const value = sanitizeFn
                ? sanitizeFn(e.target.value)
                : e.target.value;
            setData({
                ...data,
                [key]: value,
            });

            const patterns = options?.validations?.[key]?.pattern;

            if (patterns?.length) {
                for (let patternIdx in patterns) {
                    if (
                        !RegExp(patterns[patternIdx].value).test(e.target.value)
                    ) {
                        return setErrors((preValue) => ({
                            ...preValue,
                            [key]: patterns[patternIdx].message,
                        }));
                    } else {
                        delete errors[key];
                    }
                }
            }
        };

    return {
        data,
        handleChange,
        errors,
    };
};
