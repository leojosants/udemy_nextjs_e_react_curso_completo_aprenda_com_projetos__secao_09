import { InputProps } from "./interfaces/InputProps";

export default function Input(props: InputProps): JSX.Element {
    return (
        <div className={`flex flex-col ${props.className}`}>

            <label className={`mb-2`}>{props.text}</label>

            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.changeValue?.(e.target.value)}
                className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />

        </div>
    );
};