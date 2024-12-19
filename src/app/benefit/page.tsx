import Image from "next/image";
import FoundationInfo from "../../../components/foundationInfo";

export default function Benefit() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Image
        src="/images/neflogo.png"
        alt="Logo"
        width={1000} 
        height={300} 
        className=""
      />
      
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
        <h1 className="text-4xl font-bold text-black mb-4">
            2024 Annual Benefit
        </h1>
        <p className="text-black mb-4">
            Please join us for the 19th Annual Nick Erdy Foundation - Dinner,
            Dance and Auction on Saturday November 23rd, 2024 at Norlyn Manor!
        </p>
        <p className="text-black mb-4">
            The doors will open at 5:30pm with an open bar followed by a
            silent auction, dinner, dancing, Split-the-Pot, raffles and so
            much more!
        </p>
        <p className="text-black mb-4">
            Checks can be mailed to address below or payment can now be made
            via PayPal. PayPal is fast, convenient and you don't need a PayPal
            account to use this method of payment. Let us know if you have any
            questions.
        </p>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 flex justify-center">
          <Image
            src="/images/benefit2.jpg"
            alt="Home Section Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
            <h3>Individual Ticket - $90/person</h3>
            {/* <h5>(price increases to $90/person on November 1st)</h5> */}
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="formIndividual">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="QZALKA3BDJVKA" />
                <table>
                <tr>
                    <td>
                    <input type="hidden" name="on0" value="Number of Tickets"/>
                    Number of Tickets
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="os0">
                        <option value="1 Person">
                            1 Person $90.00 USD
                        </option>
                        <option value="2 People">
                            2 People $180.00 USD
                        </option>
                        <option value="3 People">
                            3 People $270.00 USD
                        </option>
                        <option value="4 People">
                            4 People $360.00 USD
                        </option>
                        <option value="5 People">
                            5 People $450.00 USD
                        </option>
                        <option value="6 People">
                            6 People $540.00 USD
                        </option>
                        <option value="7 People">
                            7 People $630.00 USD
                        </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="hidden" name="on1" value="List Attendee Names Here:"/>
                        List Attendee Names Here:
                    </td>
                </tr>
                <tr>
                <td>
                    <input type="text" name="os1" maxLength={200} />
                </td>
                </tr>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
            </form>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 ">
            <h3>Table Reservation (seats up to 8 ) - $720/table</h3>
            {/* <h5>(price increases to $720/table on November 1st)</h5> */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="formGroup">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="8CJ8G4XA39G6L" />
                    <table>
                        <tr>
                        <td>
                            <input type="hidden" name="on0" value="How Many Tables?"/>
                            How Many Tables?
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <select name="os0">
                            <option value="1 Table">
                                1 Table $720.00 USD
                            </option>
                            <option value="2 Tables">
                                2 Tables $1,440.00 USD
                            </option>
                            <option value="3 Tables">
                                3 Tables $2,160.00 USD
                            </option>
                            <option value="4 Tables">
                                4 Tables $2,880.00 USD
                            </option>
                            </select>
                        </td>
                        </tr>
                    </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
                </form>
        </div>
      </section>
      <section>
        <FoundationInfo /> 
      </section>
   
    </div>
  );
}
