import { Input } from '../types/Input';

export interface InputProps {
    type?: Input;
    text: string;
    value: any;
    readOnly?: boolean;
    className?: string;
    changeValue?: (value: any) => void;
};