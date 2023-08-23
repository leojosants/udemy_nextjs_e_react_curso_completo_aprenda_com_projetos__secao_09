import { TableProps } from "./interfaces/TableProps";

export default function Table(props: TableProps): JSX.Element {
    function renderHeader(): JSX.Element {
        return (
            <tr>
                <th>Código</th>
                <th>Nome  </th>
                <th>Idade </th>
            </tr>
        );
    };

    function renderData(): JSX.Element[] {
        return (
            props.clients?.map((client, index) => {
                return (
                    <tr key={index}>
                        <td>{client.id}  </td>
                        <td>{client.name}</td>
                        <td>{client.age} </td>
                    </tr>
                );
            })
        );
    };

    return (
        <table>
            <thead>{renderHeader()} </thead>
            <tbody>{renderData()}   </tbody>
        </table>
    );
};