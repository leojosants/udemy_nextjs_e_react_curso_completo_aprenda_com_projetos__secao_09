import Layout from "@/components/LayoutComponent";
import Table from "@/components/TableComponent";
import Client from "@/core/Client";

export default function Home() {
  const clients: Client[] = [
    new Client('Leonardo', 39, '1'),
    new Client('Dalva', 60, '2'),
    new Client('Thayra', 35, '3'),
    new Client('Jenny', 21, '1'),
    new Client('Kayo', 15, '1'),
  ];

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

      <Layout title="Cadastro Simples">
        <Table clients={clients}/>
      </Layout>

    </div>
  );
};
