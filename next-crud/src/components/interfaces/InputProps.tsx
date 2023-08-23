export interface InputProps {
    type?: 'text' | 'number';
    text: string;
    value: any;
    readOnly?: boolean;
    className?: string;
    changeValue?: (value: any) => void;
};