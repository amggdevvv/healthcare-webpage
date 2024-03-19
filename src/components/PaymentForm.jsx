import React from "react";
import Button from "./ui/Button";

const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function PaymentForm() {
  return (
    <div>
      <form>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-semibold text-gray-900">
            Email
          </label>
          <input
            required
            className="rounded-sm border border-[#ddd] px-3 py-2 outline-none"
            type="email"
            placeholder="Email Address"
          />
          <label htmlFor="name" className="font-semibold text-gray-900">
            Full Name
          </label>
          <input
            required
            className="rounded-sm border border-[#ddd] px-3 py-2 outline-none"
            type="text"
            placeholder="First and last name"
          />
          <label htmlFor="country" className="font-semibold text-gray-900">
            Country or region
          </label>
          <select
            id="country"
            name="country"
            required
            className="rounded-sm border border-[#ddd] px-3 py-2 outline-none"
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

          <label htmlFor="address" className="font-semibold text-gray-900">
            Address line 1
          </label>
          <input
            required
            className="rounded-sm border border-[#ddd] px-3 py-2 outline-none"
            type="text"
            placeholder="Street Address"
          />
          <Button
            name={"Pay Now"}
            type={"button"}
            className={
              "min-w-full bg-[radial-gradient(54.97%_272.54%_at_27.36%_-25.72%,_#66181f_75%,_rgba(0,_0,_0,_.9)_100%)] text-white"
            }
          />
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
