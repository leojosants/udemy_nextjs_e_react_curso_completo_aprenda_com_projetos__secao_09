import Layout from "@/components/LayoutComponent";
import Table from "@/components/TableComponent";
import Client from "@/core/Client";

export default function Home() {
  const clients: Client[] = [
    new Client('Leonardo', 39, '1'),
    new Client('Dalva', 60, '2'),
    new Client('Thayra', 35, '3'),
    new Client('Jenny', 21, '4'),
    new Client('Kayo', 15, '5'),
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
        <Table clients={clients} selectedClient={selectedClient} excludedClient={excludedClient} />
      </Layout>

    </div>
  );
};
