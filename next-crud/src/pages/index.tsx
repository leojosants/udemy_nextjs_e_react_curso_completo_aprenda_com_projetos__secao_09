import Button from "@/components/ButtonComponent";
import Form from "@/components/FormComponent";
import Layout from "@/components/LayoutComponent";
import Table from "@/components/TableComponent";
import { Visible } from "@/components/types/Visible";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<Visible>('table');

  const clients: Client[] = [
    new Client('nome_1', 1, '1'),
    new Client('nome_2', 2, '2'),
    new Client('nome_3', 3, '3'),
    new Client('nome_4', 4, '4'),
    new Client('nome_5', 4, '5'),
  ];

  function selectedClient(client: Client): void {
    console.log(client.name);
  };

  function excludedClient(client: Client): void {
    console.log(client.age);
  };

  function saveClient(client: Client) { 
    console.log(client);
  };

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

      <Layout title="Cadastro Simples">
        {
          visible === 'table' ?
            (
              <>
                <div className={`flex justify-end`}>

                  <Button color='green' className={`mb-4`} onClick={() => setVisible('form')}>
                    Novo Cliente
                  </Button>

                </div>

                <Table clients={clients} selectedClient={selectedClient} excludedClient={excludedClient} />
              </>
            )
            : (
              <Form client={clients[0]} changeClient={saveClient} canceled={() => setVisible('table')} />
            )
        }

      </Layout>

    </div>
  );
};
