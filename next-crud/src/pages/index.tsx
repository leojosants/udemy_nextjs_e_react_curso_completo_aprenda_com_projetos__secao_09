import Button from "@/components/ButtonComponent";
import Form from "@/components/FormComponent";
import Layout from "@/components/LayoutComponent";
import Table from "@/components/TableComponent";
import { Visible } from "@/components/types/Visible";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty());
  const [visible, setVisible] = useState<Visible>('table');

  const clients: Client[] = [
    new Client('nome_1', 1, '1'),
    new Client('nome_2', 2, '2'),
    new Client('nome_3', 3, '3'),
    new Client('nome_4', 4, '4'),
    new Client('nome_5', 4, '5'),
  ];

  function selectedClient(client: Client): void {
    setClient(client);
    setVisible('form');
  };

  function excludedClient(client: Client): void {
    console.log(client.age);
  };

  function newClient():void {
    setClient(Client.empty());
    setVisible('form');
  };

  function saveClient(client: Client): void  {
    console.log(client);
    setVisible('table');
  };

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

      <Layout title="Cadastro Simples">
        {
          visible === 'table' ?
            (
              <>
                <div className={`flex justify-end`}>

                  <Button color='green' className={`mb-4`} onClick={newClient}>
                    Novo Cliente
                  </Button>

                </div>

                <Table clients={clients} selectedClient={selectedClient} excludedClient={excludedClient} />
              </>
            )
            : (
              <Form client={client} changeClient={saveClient} canceled={() => setVisible('table')} />
            )
        }

      </Layout>

    </div>
  );
};
