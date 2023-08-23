import { TitleProps } from "./interfaces/TitleProps";

export default function Title(props: any): JSX.Element {
    return (
        <div className={`flex flex-col justify-center`}>
         
            <h1 className={`px-5 py-2 text-2xl`}>
                {props.children}
            </h1>

            <hr className={`border-2 border-purple-500`} />
        </div>
    );
};