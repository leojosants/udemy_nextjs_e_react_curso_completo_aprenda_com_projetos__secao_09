import { TableProps } from "./interfaces/TableProps";

export default function Table(props: TableProps): JSX.Element {
    function renderHeader(): JSX.Element {
        return (
            <tr>
                <th className={`text-left p-4`}>
                    Código
                </th>
                <th className={`text-left p-4`}>
                    Nome
                </th>
                <th className={`text-left p-4`}>
                    Idade
                </th>
            </tr>
        );
    };

    function renderData(): JSX.Element[] {
        return (
            props.clients?.map((client, index) => {
                return (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                        <td className={`text-left p-4`}>
                            {client.id}
                        </td>
                        <td className={`text-left p-4`}>
                            {client.name}
                        </td>
                        <td className={`text-left p-4`}>
                            {client.age}
                        </td>
                    </tr>
                );
            })
        );
    };

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800`}>
                {renderHeader()}
            </thead>

            <tbody>{renderData()}</tbody>
        </table>
    );
};