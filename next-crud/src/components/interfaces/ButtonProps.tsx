import { Color } from "../types/Color";

export interface ButtonProps {
    color?: Color;
    className?: string;
    children: any;
    onClick?: () => void;
};