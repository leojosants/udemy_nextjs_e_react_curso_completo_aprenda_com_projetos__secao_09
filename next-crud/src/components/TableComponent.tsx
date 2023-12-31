import Client from '../core/Client';
import { EditIcon, TrashIcon } from './functions/Icons';
import { TableProps } from './interfaces/TableProps';

export default function Table(props: TableProps) {

    const showActions = props.excludedClient || props.selectedClient;

    function renderHeader() {
        return (
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {
                    showActions ? (
                        <th className={`p-4`}>Ações</th>
                    ) : false
                }
            </tr>
        );
    };

    function renderData() {
        return props.clients?.map((client, index) => {
            return (
                <tr key={client.id} className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={`text-left p-4`}>{client.id}</td>
                    <td className={`text-left p-4`}>{client.name}</td>
                    <td className={`text-left p-4`}>{client.age}</td>
                    {
                        showActions ? (renderActions(client)) : false
                    }
                </tr>
            );
        });
    };

    function renderActions(client: Client) {
        return (
            <td className={`flex justify-center`}>
                {
                    props.selectedClient ?
                        (
                            <button onClick={() => props.selectedClient?.(client)} className={`
                                flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50
                            `}>
                                {EditIcon}
                            </button>
                        ) : false
                }
                {
                    props.excludedClient ?
                        (
                            <button onClick={() => props.excludedClient?.(client)} className={`
                                flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`
                            }>
                                {TrashIcon}
                            </button>
                        ) : false
                }
            </td>
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