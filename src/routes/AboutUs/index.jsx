import ContactInfo from "components/ContactInfo";

function AboutUs() {
  return (
    <div className="grow w-5/6 sm:w-3/5 m-auto py-8">
      <h1 className="text-3xl tracking-wide">Details about us</h1>
      <p className="my-4">Company information, starting from July 4, 2023:</p>
      <p className="text-xl font-bold my-4">
        Website provider and contracted party for payment services for users
        residing or established in Brazil:
      </p>
      <ContactInfo />
      <h2 className="text-xl font-bold">Your personal data</h2>
      <p className="my-4">
        To exercise your rights regarding your personal data, access here.
      </p>
      <p>
        If you have any questions about privacy or data protection at ReacTour,
        you can contact our Data Protection Officer (DPO) via email at:
        dpo@reactour.com.
      </p>
    </div>
  );
}

export default AboutUs;
