import { useState } from "react";
import { countries } from "../assets/CountryDetail.js";
import "./Signupform.css";
import React from "react";

function SignupForm() {
  // for country code and its flag
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.iso === "IN") || countries,
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleCountryChange = (e) => {
    const country = countries.find((c) => c.iso === e.target.value);
    setSelectedCountry(country);
  };

  const isFloating = isFocused || phoneNumber.length > 0;

  // for language selector
  const [language, setLanguage] = useState("");

  // for six number otp

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;

    if (val === "" || /^[0-9\b]+$/.test(val)) {
      setValue(val);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center  relative top-7 signup-container ">
      {/* Container */}
      <div className="w-[50vw] border border-white rounded-3xl p-18 signformContainer ">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-md">
            <img
              src="https://kwik.trade/frontend/assets/images/home/bar.svg"
              alt=""
              className=""
            />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg font-Poppins">
              Open Your Kwik Trade Account
            </h2>
            <p className="text-gray-400 text-[7.5px]">
              Start Trading in 2 Minutes | Completely Free
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div class="input-box">
            <input type="text" required />
            <label
              htmlFor=""
              class="label  
 "
            >
              Full Name *
            </label>
          </div>

          {/* Mobile + Button */}
          <div className="flex gap-3  ">
            {/* gpt */}

            <div className="contact-container">
              {/* Floating Label */}
              <label className={`floating-label ${isFloating ? "active" : ""}`}>
                Mobile Number*
              </label>

              {/* Country */}
              <div className="country-select">
                <img src={selectedCountry.flag} alt={selectedCountry.name} />

                <select
                  value={selectedCountry.iso}
                  onChange={handleCountryChange}
                  className="country-dropdown"
                >
                  {countries.map((c) => (
                    <option key={c.iso} value={c.iso}>
                      {c.iso} ({c.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* Input */}
              <input
                maxLength="10"
                type="tel"
                value={phoneNumber}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                className="phone-input"
              />
            </div>

            <a href="javascript:void(0)">
              <button className="bg-[oklch(0.91_0.2_118.21)] text-black px-4 rounded-md font-medium Otp-btn">
                Send OTP
              </button>
            </a>
          </div>

          {/* OTP + Button */}
          <div className="flex gap-3">
            <div className="input-box-3">
              <input
                id="otp"
                type="text"
                required
                value={value}
                onChange={handleChange}
                maxlength="6"
                inputMode="numeric"
              />
              <label htmlFor="otp" id="label-3">
                Enter OTP*
              </label>
            </div>

            <a href="javascript:void(0)">
              <button className="bg-[oklch(0.91_0.2_118.21)] text-black px-4 rounded-md font-medium">
                Verify OTP
              </button>
            </a>
          </div>

          <div className=" bg-black ">
            <div className=" w-full ">
              {/* The Fieldset approach allows the label to sit "inside" the border line */}
              <fieldset className="border border-white rounded-md px-3 pb-2 pt-1 group ">
                <legend className="text-xs font-bold text-white px-1 ml-1 ">
                  Select Language*
                </legend>

                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-transparent text-white outline-none appearance-none cursor-pointer py-1"
                >
                  <option
                    value=""
                    disabled
                    className="bg-black font-bold text-xm"
                  >
                    Select
                  </option>
                  <option value="en" className="bg-black">
                    Hindi
                  </option>
                  <option value="es" className="bg-black">
                    English
                  </option>
                  <option value="fr" className="bg-black">
                    Gujarati
                  </option>
                  <option value="fr" className="bg-black">
                    Talugu
                  </option>
                  <option value="fr" className="bg-black">
                    Tamil
                  </option>
                  <option value="fr" className="bg-black">
                    Kannada
                  </option>
                </select>
              </fieldset>
            </div>
          </div>

          <div className="input-box-4">
            <input id="fullName" type="text" required />
            <label htmlFor="fullName" id="label-4">
              Create Password*
            </label>
          </div>

          <div className="input-box-5">
            <input id="fullName" type="text" required />
            <label htmlFor="fullName" id="label-5">
              Confirm Password*
            </label>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <input type="checkbox" />
            <p className="font-medium">
              I agree to the{" "}
              <span className="text-lime-300">Privacy Policies</span> and{" "}
              <span className="text-lime-300">Terms and Conditions</span>
              and I consent to receive SMS and RCS massages (update, offers, and
              security OTPs)from Kwik Trade{" "}
            </p>
          </div>

          {/* Button */}
          <button className="w-full bg-lime-300 text-black py-3 rounded-md font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
