import Image from "next/image";
import FoundationInfo from "../../../components/foundationInfo";

export default function About() {
    return (
        <div className="flex flex-col items-center bg-white">
            <section className="flex flex-row items-center justify-between bg-white p-8">
                <div className="w-1/2 pr-4">
                    <h1 className="text-4xl font-bold text-black mb-4">
                    Established in 2005 in honor of Lance Corporal Nicholas Erdy.
                    </h1>
                    <p className="text-black mb-4">
                    The foundation raises funds for scholarships and contributes to
                    organizations that provide much needed aid for our returning
                    injured military and their families.
                    </p>
                </div>
                <div className="w-1/2 pl-4 flex justify-center">
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