import { useState } from "react";
import Input from "./InputComponent";
import { FormProps } from "./interfaces/FormProps";
import Button from "./ButtonComponent";

export default function Form(props: FormProps): JSX.Element {
    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);

    return (
        <div>
            {
                id ?
                    (<Input readOnly text='Código' value={id} className={`mb-5`} />)
                    : false
            }

            <Input text='Nome' value={name} changeValue={setName} className={`mb-5`} />

            <Input text='Idade' type='number' value={age} changeValue={setAge} />

            <div className={`flex justify-end mt-7`}>
                <Button color='blue' className={`mr-2`}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button color='gray'>
                    Calcelar
                </Button>
            </div>

        </div>
    );
};