import Image from "next/image";
import FoundationInfo from "../../../components/foundationInfo";

export default function Donate() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Image
        src="/images/neflogo.png" // Path to your image in the public folder
        alt="Logo"
        width={1000} // Adjust the width
        height={300} // Adjust the height
        className="" // Optional Tailwind classes for styling
      />
      
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
        <h1 className="text-4xl font-bold text-black mb-4">
          Donate
        </h1>
        <p className="text-black mb-4">
            Feel free to reach out to us via email or phone. We will accept
            donations to the silent auction year round and your monetary
            donations via PayPal are always appreciated. For more information
            about silent auction donations used at our benefit, please go to
            the Benefit page.
        </p>
        <p className="text-black mb-4">
            All Donations will receive acknowledgement at our benefit dinner
            and as always, all donations are tax deductible as stated by IRS
            code.
        </p>
        <p className="text-black mb-4">
            The Donate button below will allow monetary donations of any size.
            Thank you for supporting our foundation!
        </p>
        <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />{" "}
              <input
                name="hosted_button_id"
                type="hidden"
                value="QFYR35PYBUXJJ"
              />{" "}
              <input
                alt="PayPal - The safer, easier way to pay online!"
                name="submit"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                type="image"
              />{" "}
              <img
                alt=""
                height="1"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
              />
            </form>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 flex justify-center">
          <Image
            src="/images/aboutne.png"
            alt="Home Section Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
      <section>
        <FoundationInfo /> 
      </section>
   
    </div>
  );
}
