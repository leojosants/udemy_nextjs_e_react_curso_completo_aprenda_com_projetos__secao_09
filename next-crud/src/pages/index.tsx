import Button from '../components/ButtonComponent';
import Form from '../components/FormComponent';
import Layout from '../components/LayoutComponent';
import Table from '../components/TableComponent';

import useClients from '../hooks/useClients';

export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    selectedClient,
    deleteClient,
    visibleTable,
    showTable,
  } = useClients();

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout title='Cadastro Simples'>
        {
          visibleTable ?
            (
              <>
                <div className={`flex justify-end`}>
                  <Button color='green' className={`mb-4`}
                    onClick={newClient}>
                    Novo Cliente
                  </Button>
                </div>
                <Table clients={clients} selectedClient={selectedClient} excludedClient={deleteClient} />
              </>
            )
            : (
              <Form client={client} changeClient={saveClient} canceled={showTable} />
            )
        }
      </Layout>
    </div>
  );
};
