import Button from "@/components/ButtonComponent";
import Form from "@/components/FormComponent";
import Layout from "@/components/LayoutComponent";
import Table from "@/components/TableComponent";
import Client from "@/core/Client";

export default function Home() {
  const clients: Client[] = [
    new Client('nome_1', 0, '1'),
    new Client('nome_2', 1, '2'),
    new Client('nome_3', 2, '3'),
    new Client('nome_4', 3, '4'),
    new Client('nome_5', 4, '5'),
  ];

  function selectedClient(client: Client): void {
    console.log(client.name);
  };

  function excludedClient(client: Client): void {
    console.log(client.age);
  };

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

      <Layout title="Cadastro Simples">
       
        <div className={`flex justify-end`}>
          <Button color='green' className={`mb-4`}>Novo Cliente</Button>
        </div>

        <Table clients={clients} selectedClient={selectedClient} excludedClient={excludedClient} />

        <Form client={clients[0]} />

      </Layout>

    </div>
  );
};
