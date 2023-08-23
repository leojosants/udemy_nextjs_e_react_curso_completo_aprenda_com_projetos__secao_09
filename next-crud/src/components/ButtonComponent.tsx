import { ButtonProps } from "./interfaces/ButtonProps";

export default function Button(props: ButtonProps): JSX.Element {
    const color = props.color ?? 'gray';

    return (
        <button className={`
            bg-gradient-to-r from-${color}-400 to-${color}-700 text-white px-4 py-2 rounded-md ${props.className}
        `}>
            {props.children}
        </button>
    );
};