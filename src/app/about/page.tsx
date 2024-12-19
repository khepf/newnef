import Image from "next/image";
import FoundationInfo from "../../../components/foundationInfo";

export default function About() {
    return (
        <div className="flex flex-col items-center bg-white">
            <section className="flex flex-row items-center justify-between bg-white p-8">
                <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
                    <h1 className="text-4xl sm:text-4xl font-extrabold text-black mb-6 leading-snug">
                    Established in 2005 in honor of Lance Corporal Nicholas Erdy.
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                    The foundation raises funds for scholarships and contributes to
                    organizations that provide much needed aid for our returning
                    injured military and their families.
                    </p>
                </div>
                <div className="w-full md:w-1/2 pl-0 md:pl-4 flex justify-center">
                    <Image
                        src="/images/aboutSection1pic.jpg"
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
    )
  }