import React from 'react';

interface PayPalFormProps {
  formTitle: string;
  formSubtitle?: string;
  ticketType: string;
  paypalBtnId: string;
  options: { value: string; label: string }[];
}

const PayPalForm: React.FC<PayPalFormProps> = ({ formTitle, formSubtitle, paypalBtnId, options }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">{formTitle}</h3>
        {formSubtitle && <h3 className="text-sm font-semibold mb-4">{formSubtitle}</h3>}
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="space-y-4">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={paypalBtnId} />
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Number of Attendees:
                <input type="hidden" name="on0" value="Number of Attendees" />
              </label>
              <select name="os0" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Attendee Names:
                <input type="hidden" name="on1" value="Attendee Names" />
              </label>
              <input type="text" name="os1" maxLength={200} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ring-2 ring-gray-400 focus:outline-none" />
            </div>
          </div>
          <input type="hidden" name="currency_code" value="USD" />
          <div className="flex justify-center">
            <button type="submit" className="inline-flex items-center px-4 py-2 text-sm font-bold rounded-[18px] shadow-sm text-black bg-[#FFC439] hover:bg-[#E1A519] focus:outline-none">
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayPalForm;