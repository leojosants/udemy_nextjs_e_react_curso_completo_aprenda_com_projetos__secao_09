import { InputType } from "../types/Input";

export interface InputProps {
    // type?: 'text' | 'number';
    type?: InputType;
    text: string;
    value: any;
    readOnly?: boolean;
    className?: string;
    changeValue?: (value: any) => void;
};