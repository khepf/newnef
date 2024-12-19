import Image from "next/image";
import Link from 'next/link';
import FoundationInfo from "../../../components/foundationInfo";

export default function Golf() {
  return (
    <div className="flex flex-col items-center bg-white">

      
      <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
            <h1 className="text-4xl sm:text-4xl font-extrabold text-black mb-6 leading-snug">
                19th Annual 2025 Nick Erdy Foundation Golf Outing
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                will be held on May 31st, 2025 at the Hickory Woods Golf Course in
                Loveland. Registration is from 12 to 1pm with a shotgun start at
                1:30 pm. Cost of ticket also includes dinner and Two (2) drink
                tickets.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                Awards and prizes for 1st place, longest drive, closest to the pin
                and longest putt.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                Checks can be mailed to address below or payment can now be made
                via PayPal. PayPal is fast, convenient and you don't need a PayPal
                account to use this method of payment. Let us know if you have any
                questions.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-4 leading-relaxed">
                It is the goal of this foundation to continue these works for many
                years to come. Through the generosity of so many wonderful people,
                both here at home, and all over the United States, we can continue
                to help others while keeping Nick's memory alive.
            </p>
        </div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 flex flex-col items-center">
            <Image
                src="/images/golf1.jpg"
                alt="Home Section Image"
                width={300}
                height={300}
                className="rounded-lg"
            />
            <h1 className="text-2xl sm:text-2xl font-bold text-black mb-6 leading-snug">Additional Info</h1>
            <Image
                src="/images/hickoryWoods.jpg"
                alt="Home Section Image"
                width={300}
                height={300}
                className="rounded-lg"
             />
            <div>
            <div className="text-lg sm:text-xl text-blue-700 mb-4 leading-relaxed">
              <Link href="/images/2025Golf.pdf" target="_blank" rel="noopener noreferrer">
                  Golf Outing Registration Form
              </Link>
            </div>
            <div className="text-lg sm:text-xl text-blue-700 mb-4 leading-relaxed">
              <Link href="http://www.hickorywoods.com/directions" target="_blank" rel="noopener noreferrer">
                  Directions to Course
              </Link>
            </div>
            <div>
              <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">1240 Hickory Woods Drive</p>
              <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">Loveland, OH 45140</p>
              <p className="text-lg sm:text-xl text-gray-700 mb-1 leading-relaxed">Tel: 513-575-3900</p>
            </div>
            
            </div>
        </div>
      </section>
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
            <h3>Individual Golfer - $110</h3>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="formIndividual">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="NE45WCBV2QV3A" />
              <table>
                <tr>
                  <td>
                    <input type="hidden" name="on0" value="Full Name of Golfer"/>
                    Full Name of Golfer
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="os0" maxLength={200} />
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
            </form>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 ">
            <h3>Golf Outing Foursome - $440</h3>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="formIndividual">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="L9S82MYNLH94S" />
              <table>
                <tr>
                  <td>
                    <input type="hidden" name="on0" value="Please list names of all golfers"/>
                    Please List Names of All Golfers
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="os0" maxLength={200} />
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
            </form>
        </div>
      </section>
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
            <h3>Silver - $440</h3>
            <h4>Golf Outing Foursome + 4 Mulligans</h4>
            <p className='lead'>
              make sure to list all 4 golfers on the donate screen
            </p>
            <form
              action='https://www.paypal.com/donate'
              method='post'
              target='_top'
            >
              <input
                type='hidden'
                name='hosted_button_id'
                value='P9HE69JMEDJEC'
              />
              <input
                type='image'
                src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
                name='submit'
                title='PayPal - The safer, easier way to pay online!'
                alt='Donate with PayPal button'
              />
              <img
                alt=''
                src='https://www.paypal.com/en_US/i/scr/pixel.gif'
                width='1'
                height='1'
              />
            </form>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 ">
            <h3>Gold - $480</h3>
            <h4>Golf Outing Foursome + 4 Mulligans</h4>
            <h4>+ 4 entries in the “split the pot” putting contest</h4>
            <p className='lead'>
              make sure to list all 4 golfers on the donate screen
            </p>
            <form
              action='https://www.paypal.com/donate'
              method='post'
              target='_top'
            >
              <input
                type='hidden'
                name='hosted_button_id'
                value='AC4TFCB2VHK38'
              />
              <input
                type='image'
                src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
                name='submit'
                title='PayPal - The safer, easier way to pay online!'
                alt='Donate with PayPal button'
              />
              <img
                alt=''
                src='https://www.paypal.com/en_US/i/scr/pixel.gif'
                width='1'
                height='1'
              />
            </form>
        </div>
      </section>
      <section className="flex flex-row items-center justify-between bg-white p-8">
        {/* Left Half */}
        <div className="w-1/2 pr-4">
            <h3>Individual Dinner - $20</h3>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="formIndividual">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="H37SKV5K33FZL" />
                <table>
                    <tr>
                    <td>
                        <input type="hidden" name="on0" value="Reservation Without the Golf"/>
                        Reservation Without the Golf
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <input type="text" name="os0" maxLength={200} />
                    </td>
                    </tr>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
            </form>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-4 ">
            <h3>1 Hole Sponsorship - $100</h3>
            <p className='lead'>a fun way to donate!</p>
            <form
              action='https://www.paypal.com/cgi-bin/webscr'
              method='post'
              target='_top'
            >
              <input name='cmd' type='hidden' value='_s-xclick' />{' '}
              <input
                name='hosted_button_id'
                type='hidden'
                value='ZVTVFJNSKM7S2'
              />{' '}
              <input
                alt='PayPal - The safer, easier way to pay online!'
                name='submit'
                src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
                type='image'
              />{' '}
              <img
                alt=''
                height='1'
                src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
                width='1'
              />
            </form>
        </div>
      </section>
      <section>
        <FoundationInfo /> 
      </section>
   
    </div>
  );
}
