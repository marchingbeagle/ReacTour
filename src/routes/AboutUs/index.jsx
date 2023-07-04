import ContactInfo from "components/ContactInfo";

function AboutUs() {
  return (
    <div className="grow w-5/6 sm:w-3/5 m-auto py-8">
      <h1 className="text-3xl tracking-wide">Details about us</h1>
      <p className="my-4">
        Informações da empresa, a partir de 4 de julho de 2023:
      </p>
      <p className="text-xl font-bold my-4">
        Provedor do site e parte contratada para serviços de pagamento para
        usuários residentes ou estabelecidos no Brasil:
      </p>
      <ContactInfo />
      <h2 className="text-xl font-bold">Seus dados pessoais</h2>
      <p className="my-4">
        Para que você possa exercer seus direitos em relação aos seus dados
        pessoais, acesse aqui
      </p>
      <p>
        Caso você tenha alguma dúvida sobre privacidade ou proteção de dados no
        ReacTour, pode entrar em contato com nosso Encarregado pelo Tratamento
        de Dados (Data Protection Officer, DPO) através do email:
        dpo@reactour.com
      </p>
    </div>
  );
}

export default AboutUs;
