import Image from "next/image";
import FoundationInfo from "../../../components/foundationInfo";
import PayPalForm from "../../../components/paypalform";

export default function Benefit() {

    const individualDinnerFormTitle = "Individual Ticket - $75/person";
    const individualDinnerFormSubtitle = "(Price Increases to $90/person on November 1st)";
    const individualDinnerType = "Attendees";
    const individualDinnerBtnId = "JMK3F88JP645U";
    const individualDinnerOptions = [
        { value: '1 Person', label: '1 Person $75.00 USD' },
        { value: '2 People', label: '2 People $150.00 USD' },
        { value: '3 People', label: '3 People $225.00 USD' },
        { value: '4 People', label: '4 People $300.00 USD' },
        { value: '5 People', label: '5 People $375.00 USD' },
        { value: '6 People', label: '6 People $450.00 USD' },
        { value: '7 People', label: '7 People $525.00 USD' },
        ];

    const individualDinnerAfterNov1FormTitle = "Individual Ticket - $90/person";
    const individualDinnerAfterNov1Type = "Attendees";
    const individualDinnerAfterNov1BtnId = "5LTPXCEWRNELN";
    const individualDinnerOptionsAfterNov1 = [
        { value: '1 Person', label: '1 Person $90.00 USD' },
        { value: '2 People', label: '2 People $180.00 USD' },
        { value: '3 People', label: '3 People $270.00 USD' },
        { value: '4 People', label: '4 People $360.00 USD' },
        { value: '5 People', label: '5 People $450.00 USD' },
        { value: '6 People', label: '6 People $540.00 USD' },
        { value: '7 People', label: '7 People $630.00 USD' },
      ];

      const tableDinnerFormTitle = "Table Reservation - $600/table";
      const tableDinnerFormSubtitle = "Seats Up To 8 People";
      const tableDinnerType = "Attendees";
      const tableDinnerBtnId = "LJGHBCWK4BJQW";
      const tableDinnerOptions = [
          { value: '1 Table', label: '1 Table $600.00 USD' },
          { value: '2 Tables', label: '2 Tables $1200.00 USD' },
          { value: '3 Tables', label: '3 Tables $1800.00 USD' },
          { value: '4 Tables', label: '4 Tables $2400.00 USD' },
          ];

      const tableDinnerAfterNov1FormTitle = "Table Reservation - $720/table";
      const tableDinnerAfterNov1FormSubtitle = "Seats Up To 8 People";
      const tableDinnerAfterNov1Type = "Attendees";
      const tableDinnerAfterNov1BtnId = "TJ6PHQ52DWUQW";
      const tableDinnerAfterNov1Options = [
          { value: '1 Table', label: '1 Table $720.00 USD' },
          { value: '2 Tables', label: '2 Tables $1440.00 USD' },
          { value: '3 Tables', label: '3 Tables $2160.00 USD' },
          { value: '4 Tables', label: '4 Tables $2880.00 USD' },
          ];

  return (
    <div className="flex flex-col items-center bg-white">
      <Image
        src="/images/neflogo.png"
        alt="Logo"
        width={1000} 
        height={300} 
        className=""
      />
      
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
            <h1 className="text-4xl sm:text-4xl font-extrabold text-black mb-6 leading-snug">
                2024 Annual Benefit
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                Please join us for the 19th Annual Nick Erdy Foundation - Dinner,
                Dance and Auction on Saturday November 23rd, 2024 at Norlyn Manor!
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                The doors will open at 5:30pm with an open bar followed by a
                silent auction, dinner, dancing, Split-the-Pot, raffles and so
                much more!
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                Checks can be mailed to address below or payment can now be made
                via PayPal. PayPal is fast, convenient and you don't need a PayPal
                account to use this method of payment. Let us know if you have any
                questions.
            </p>
        </div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex justify-center">
          <Image
            src="/images/benefit2.jpg"
            alt="Home Section Image"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
            {/* <h5>(price increases to $90/person on November 1st)</h5> */}
            <PayPalForm formTitle={individualDinnerFormTitle} formSubtitle={individualDinnerFormSubtitle} ticketType={individualDinnerType} paypalBtnId={individualDinnerBtnId} options={individualDinnerOptions}/>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 ">
            <PayPalForm formTitle={tableDinnerFormTitle} formSubtitle={tableDinnerFormSubtitle} ticketType={tableDinnerType} paypalBtnId={tableDinnerBtnId} options={tableDinnerOptions}/>
        </div>
      </section>
      <section>
        <FoundationInfo /> 
      </section>
   
    </div>
  );
}
