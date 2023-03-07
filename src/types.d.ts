declare type GetOptionalType<T> = {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K];
};

declare type GetRequiredType<T> = {
    [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};
