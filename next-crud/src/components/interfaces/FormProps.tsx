import Client from '../../core/Client';

export interface FormProps {
    client: Client;
    changeClient?: (client: Client) => void;
    canceled?: () => void;
};