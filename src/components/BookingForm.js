import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function BookingForm({ title, onSubmitted }) {
  const [formType, setFormType] = useState("book"); // 'book' أو 'custom'
  const [formData, setFormData] = useState({
    title: title || "",
    name: "",
    email: "",
    countryCode: "+20", // افتراضي لمصر
    phone: "",
    rooms: "",
    pax: "",
    child: "",
    arrival_date: "",
    customDetails: "",
    isCustom: "false",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "customDetails" ? { isCustom: "true" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من الحقول المطلوبة
    if (!formData.name || !formData.email || !formData.phone || !formData.rooms) {
      alert("Please fill in all required fields.");
      return;
    }

    const response = await fetch("https://cit-egypt.com/sendEmail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      onSubmitted && onSubmitted();
      // إعادة تعيين الفورم مع الاحتفاظ بالعنوان
      setFormData({
        title: title || "",
        name: "",
        email: "",
        countryCode: "+20",
        phone: "",
        rooms: "",
        pax: "",
        child: "",
        arrival_date: "",
        customDetails: "",
        isCustom: "false",
      });
      setFormType("book"); 
    } else {
      alert("There was a problem with your submission. Please try again.");
    }
  };

  return (
    <div className="book-form">
      <div className="d-flex gap-2 mb-3" role="tablist">
        <button
          type="button"
          className={`btn flex-fill ${
            formType === "book" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFormType("book")}
        //   style={{ background: "#fc4c03", borderColor: "#fc4c03",color:"#fff", width: "100%" }}
        >
          Book Now
        </button>
        <button
          type="button"
          className={`btn flex-fill ${
            formType === "custom" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFormType("custom")}
        //   style={{ background: "#fc4c03", borderColor: "#fc4c03",color:"#fff", width: "100%" }}
        >
          Custom Request
        </button>
      </div>

      <Form onSubmit={handleSubmit}>
        {/* Hidden title */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            readOnly
            style={{ display: "none" }}
          />
        </Form.Group>

        {/* Name */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
          />
        </Form.Group>

        {/* Phone with Country Code */}
        <Form.Group className="mb-3" controlId="formPhoneGroup">
          <div style={{ display: "flex", gap: "10px" }}>
            <Form.Select
              required
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              style={{ maxWidth: "120px" }}
            >
              <option value="">Code</option>
              <option value="+93">+93 🇦🇫 Afghanistan</option>
                <option value="+355">+355 🇦🇱 Albania</option>
                <option value="+213">+213 🇩🇿 Algeria</option>
                <option value="+1684">+1684 🇦🇸 American Samoa</option>
                <option value="+376">+376 🇦🇩 Andorra</option>
                <option value="+244">+244 🇦🇴 Angola</option>
                <option value="+1264">+1264 🇦🇮 Anguilla</option>
                <option value="+672">+672 🇦🇶 Antarctica</option>
                <option value="+1268">+1268 🇦🇬 Antigua & Barbuda</option>
                <option value="+54">+54 🇦🇷 Argentina</option>
                <option value="+374">+374 🇦🇲 Armenia</option>
                <option value="+297">+297 🇦🇼 Aruba</option>
                <option value="+61">+61 🇦🇺 Australia</option>
                <option value="+43">+43 🇦🇹 Austria</option>
                <option value="+994">+994 🇦🇿 Azerbaijan</option>
                <option value="+1242">+1242 🇧🇸 Bahamas</option>
                <option value="+973">+973 🇧🇭 Bahrain</option>
                <option value="+880">+880 🇧🇩 Bangladesh</option>
                <option value="+1246">+1246 🇧🇧 Barbados</option>
                <option value="+375">+375 🇧🇾 Belarus</option>
                <option value="+32">+32 🇧🇪 Belgium</option>
                <option value="+501">+501 🇧🇿 Belize</option>
                <option value="+229">+229 🇧🇯 Benin</option>
                <option value="+1441">+1441 🇧🇲 Bermuda</option>
                <option value="+975">+975 🇧🇹 Bhutan</option>
                <option value="+591">+591 🇧🇴 Bolivia</option>
                <option value="+387">+387 🇧🇦 Bosnia & Herz.</option>
                <option value="+267">+267 🇧🇼 Botswana</option>
                <option value="+55">+55 🇧🇷 Brazil</option>
                <option value="+246">+246 🇮🇴 British Indian Ocean Territory</option>
                <option value="+673">+673 🇧🇳 Brunei</option>
                <option value="+359">+359 🇧🇬 Bulgaria</option>
                <option value="+226">+226 🇧🇫 Burkina Faso</option>
                <option value="+257">+257 🇧🇮 Burundi</option>
                <option value="+855">+855 🇰🇭 Cambodia</option>
                <option value="+237">+237 🇨🇲 Cameroon</option>
                <option value="+1">+1 🇨🇦 Canada</option>
                <option value="+238">+238 🇨🇻 Cape Verde</option>
                <option value="+1345">+1345 🇰🇾 Cayman Islands</option>
                <option value="+236">+236 🇨🇫 Central African Rep.</option>
                <option value="+235">+235 🇹🇩 Chad</option>
                <option value="+56">+56 🇨🇱 Chile</option>
                <option value="+86">+86 🇨🇳 China</option>
                <option value="+61">+61 🇨🇽 Christmas Island</option>
                <option value="+61">+61 🇨🇨 Cocos (Keeling) Islands</option>
                <option value="+57">+57 🇨🇴 Colombia</option>
                <option value="+269">+269 🇰🇲 Comoros</option>
                <option value="+242">+242 🇨🇬 Congo</option>
                <option value="+243">+243 🇨🇩 Congo, Dem. Rep.</option>
                <option value="+682">+682 🇨🇰 Cook Islands</option>
                <option value="+506">+506 🇨🇷 Costa Rica</option>
                <option value="+225">+225 🇨🇮 Côte d'Ivoire</option>
                <option value="+385">+385 🇭🇷 Croatia</option>
                <option value="+53">+53 🇨🇺 Cuba</option>
                <option value="+357">+357 🇨🇾 Cyprus</option>
                <option value="+420">+420 🇨🇿 Czech Republic</option>
                <option value="+45">+45 🇩🇰 Denmark</option>
                <option value="+253">+253 🇩🇯 Djibouti</option>
                <option value="+1767">+1767 🇩🇲 Dominica</option>
                <option value="+1809">+1809 🇩🇴 Dominican Rep.</option>
                <option value="+593">+593 🇪🇨 Ecuador</option>
                <option value="+20">+20 🇪🇬 Egypt</option>
                <option value="+503">+503 🇸🇻 El Salvador</option>
                <option value="+240">+240 🇬🇶 Equatorial Guinea</option>
                <option value="+291">+291 🇪🇷 Eritrea</option>
                <option value="+372">+372 🇪🇪 Estonia</option>
                <option value="+251">+251 🇪🇹 Ethiopia</option>
                <option value="+500">+500 🇫🇰 Falkland Islands</option>
                <option value="+298">+298 🇫🇴 Faroe Islands</option>
                <option value="+679">+679 🇫🇯 Fiji</option>
                <option value="+358">+358 🇫🇮 Finland</option>
                <option value="+33">+33 🇫🇷 France</option>
                <option value="+594">+594 🇬🇫 French Guiana</option>
                <option value="+689">+689 🇵🇫 French Polynesia</option>
                <option value="+262">+262 🇹🇫 French Southern Territories</option>
                <option value="+241">+241 🇬🇦 Gabon</option>
                <option value="+220">+220 🇬🇲 Gambia</option>
                <option value="+995">+995 🇬🇪 Georgia</option>
                <option value="+49">+49 🇩🇪 Germany</option>
                <option value="+233">+233 🇬🇭 Ghana</option>
                <option value="+350">+350 🇬🇮 Gibraltar</option>
                <option value="+30">+30 🇬🇷 Greece</option>
                <option value="+299">+299 🇬🇱 Greenland</option>
                <option value="+1473">+1473 🇬🇩 Grenada</option>
                <option value="+590">+590 🇬🇵 Guadeloupe</option>
                <option value="+1671">+1671 🇬🇺 Guam</option>
                <option value="+502">+502 🇬🇹 Guatemala</option>
                <option value="+44">+44 🇬🇬 Guernsey</option>
                <option value="+224">+224 🇬🇳 Guinea</option>
                <option value="+245">+245 🇬🇼 Guinea-Bissau</option>
                <option value="+592">+592 🇬🇾 Guyana</option>
                <option value="+509">+509 🇭🇹 Haiti</option>
                <option value="+379">+379 🇻🇦 Holy See (Vatican City)</option>
                <option value="+504">+504 🇭🇳 Honduras</option>
                <option value="+852">+852 🇭🇰 Hong Kong</option>
                <option value="+36">+36 🇭🇺 Hungary</option>
                <option value="+354">+354 🇮🇸 Iceland</option>
                <option value="+91">+91 🇮🇳 India</option>
                <option value="+62">+62 🇮🇩 Indonesia</option>
                <option value="+98">+98 🇮🇷 Iran</option>
                <option value="+964">+964 🇮🇶 Iraq</option>
                <option value="+353">+353 🇮🇪 Ireland</option>
                <option value="+44">+44 🇮🇲 Isle of Man</option>
                <option value="+972">+972 🇮🇱 Israel</option>
                <option value="+39">+39 🇮🇹 Italy</option>
                <option value="+1876">+1876 🇯🇲 Jamaica</option>
                <option value="+81">+81 🇯🇵 Japan</option>
                <option value="+44">+44 🇯🇪 Jersey</option>
                <option value="+962">+962 🇯🇴 Jordan</option>
                <option value="+7">+7 🇰🇿 Kazakhstan</option>
                <option value="+254">+254 🇰🇪 Kenya</option>
                <option value="+686">+686 🇰🇮 Kiribati</option>
                <option value="+850">+850 🇰🇵 North Korea</option>
                <option value="+82">+82 🇰🇷 South Korea</option>
                <option value="+965">+965 🇰🇼 Kuwait</option>
                <option value="+996">+996 🇰🇬 Kyrgyzstan</option>
                <option value="+856">+856 🇱🇦 Lao P.D.R.</option>
                <option value="+371">+371 🇱🇻 Latvia</option>
                <option value="+961">+961 🇱🇧 Lebanon</option>
                <option value="+266">+266 🇱🇸 Lesotho</option>
                <option value="+231">+231 🇱🇷 Liberia</option>
                <option value="+218">+218 🇱🇾 Libya</option>
                <option value="+423">+423 🇱🇮 Liechtenstein</option>
                <option value="+370">+370 🇱🇹 Lithuania</option>
                <option value="+352">+352 🇱🇺 Luxembourg</option>
                <option value="+853">+853 🇲🇴 Macao</option>
                <option value="+389">+389 🇲🇰 Macedonia</option>
                <option value="+261">+261 🇲🇬 Madagascar</option>
                <option value="+265">+265 🇲🇼 Malawi</option>
                <option value="+60">+60 🇲🇾 Malaysia</option>
                <option value="+960">+960 🇲🇻 Maldives</option>
                <option value="+223">+223 🇲🇱 Mali</option>
                <option value="+356">+356 🇲🇹 Malta</option>
                <option value="+692">+692 🇲🇭 Marshall Islands</option>
                <option value="+596">+596 🇲🇶 Martinique</option>
                <option value="+222">+222 🇲🇷 Mauritania</option>
                <option value="+230">+230 🇲🇺 Mauritius</option>
                <option value="+262">+262 🇾🇹 Mayotte</option>
                <option value="+52">+52 🇲🇽 Mexico</option>
                <option value="+691">+691 🇫🇲 Micronesia</option>
                <option value="+373">+373 🇲🇩 Moldova</option>
                <option value="+377">+377 🇲🇨 Monaco</option>
                <option value="+976">+976 🇲🇳 Mongolia</option>
                <option value="+382">+382 🇲🇪 Montenegro</option>
                <option value="+1664">+1664 🇲🇸 Montserrat</option>
                <option value="+212">+212 🇲🇦 Morocco</option>
                <option value="+258">+258 🇲🇿 Mozambique</option>
                <option value="+95">+95 🇲🇲 Myanmar</option>
                <option value="+264">+264 🇳🇦 Namibia</option>
                <option value="+674">+674 🇳🇷 Nauru</option>
                <option value="+977">+977 🇳🇵 Nepal</option>
                <option value="+31">+31 🇳🇱 Netherlands</option>
                <option value="+599">+599 🇦🇳 Netherlands Antilles</option>
                <option value="+687">+687 🇳🇨 New Caledonia</option>
                <option value="+64">+64 🇳🇿 New Zealand</option>
                <option value="+505">+505 🇳🇮 Nicaragua</option>
                <option value="+227">+227 🇳🇪 Niger</option>
                <option value="+234">+234 🇳🇬 Nigeria</option>
                <option value="+683">+683 🇳🇺 Niue</option>
                <option value="+672">+672 🇳🇫 Norfolk Island</option>
                <option value="+1670">+1670 🇲🇵 Northern Mariana Islands</option>
                <option value="+47">+47 🇳🇴 Norway</option>
                <option value="+968">+968 🇴🇲 Oman</option>
                <option value="+92">+92 🇵🇰 Pakistan</option>
                <option value="+680">+680 🇵🇼 Palau</option>
                <option value="+970">+970 🇵🇸 Palestine</option>
                <option value="+507">+507 🇵🇦 Panama</option>
                <option value="+675">+675 🇵🇬 Papua New Guinea</option>
                <option value="+595">+595 🇵🇾 Paraguay</option>
                <option value="+51">+51 🇵🇪 Peru</option>
                <option value="+63">+63 🇵🇭 Philippines</option>
                <option value="+64">+64 🇵🇳 Pitcairn</option>
                <option value="+48">+48 🇵🇱 Poland</option>
                <option value="+351">+351 🇵🇹 Portugal</option>
                <option value="+1787">+1787 🇵🇷 Puerto Rico</option>
                <option value="+974">+974 🇶🇦 Qatar</option>
                <option value="+262">+262 🇷🇪 Reunion</option>
                <option value="+40">+40 🇷🇴 Romania</option>
                <option value="+7">+7 🇷🇺 Russian Federation</option>
                <option value="+250">+250 🇷🇼 Rwanda</option>
                <option value="+590">+590 🇧🇱 Saint Barthélemy</option>
                <option value="+290">+290 🇸🇭 Saint Helena</option>
                <option value="+1869">+1869 🇰🇳 Saint Kitts & Nevis</option>
                <option value="+1758">+1758 🇱🇨 Saint Lucia</option>
                <option value="+590">+590 🇲🇫 Saint Martin</option>
                <option value="+508">+508 🇵🇲 Saint Pierre & Miquelon</option>
                <option value="+1784">+1784 🇻🇨 Saint Vincent & the Grenadines</option>
                <option value="+685">+685 🇼🇸 Samoa</option>
                <option value="+378">+378 🇸🇲 San Marino</option>
                <option value="+239">+239 🇸🇹 Sao Tome & Principe</option>
                <option value="+966">+966 🇸🇦 Saudi Arabia</option>
                <option value="+221">+221 🇸🇳 Senegal</option>
                <option value="+381">+381 🇷🇸 Serbia</option>
                <option value="+248">+248 🇸🇨 Seychelles</option>
                <option value="+232">+232 🇸🇱 Sierra Leone</option>
                <option value="+65">+65 🇸🇬 Singapore</option>
                <option value="+421">+421 🇸🇰 Slovakia</option>
                <option value="+386">+386 🇸🇮 Slovenia</option>
                <option value="+677">+677 🇸🇧 Solomon Islands</option>
                <option value="+252">+252 🇸🇴 Somalia</option>
                <option value="+27">+27 🇿🇦 South Africa</option>
                <option value="+211">+211 🇸🇸 South Sudan</option>
                <option value="+34">+34 🇪🇸 Spain</option>
                <option value="+94">+94 🇱🇰 Sri Lanka</option>
                <option value="+249">+249 🇸🇩 Sudan</option>
                <option value="+597">+597 🇸🇷 Suriname</option>
                <option value="+47">+47 🇸🇯 Svalbard & Jan Mayen</option>
                <option value="+268">+268 🇸🇿 Swaziland</option>
                <option value="+46">+46 🇸🇪 Sweden</option>
                <option value="+41">+41 🇨🇭 Switzerland</option>
                <option value="+963">+963 🇸🇾 Syrian Arab Republic</option>
                <option value="+886">+886 🇹🇼 Taiwan</option>
                <option value="+992">+992 🇹🇯 Tajikistan</option>
                <option value="+255">+255 🇹🇿 Tanzania</option>
                <option value="+66">+66 🇹🇭 Thailand</option>
                <option value="+670">+670 🇹🇱 Timor-Leste</option>
                <option value="+228">+228 🇹🇬 Togo</option>
                <option value="+690">+690 🇹🇰 Tokelau</option>
                <option value="+676">+676 🇹🇴 Tonga</option>
                <option value="+1868">+1868 🇹🇹 Trinidad & Tobago</option>
                <option value="+216">+216 🇹🇳 Tunisia</option>
                <option value="+90">+90 🇹🇷 Turkey</option>
                <option value="+993">+993 🇹🇲 Turkmenistan</option>
                <option value="+1649">+1649 🇹🇨 Turks & Caicos Islands</option>
                <option value="+688">+688 🇹🇻 Tuvalu</option>
                <option value="+256">+256 🇺🇬 Uganda</option>
                <option value="+380">+380 🇺🇦 Ukraine</option>
                <option value="+971">+971 🇦🇪 United Arab Emirates</option>
                <option value="+44">+44 🇬🇧 United Kingdom</option>
                <option value="+1">+1 🇺🇸 United States</option>
                <option value="+598">+598 🇺🇾 Uruguay</option>
                <option value="+998">+998 🇺🇿 Uzbekistan</option>
                <option value="+678">+678 🇻🇺 Vanuatu</option>
                <option value="+58">+58 🇻🇪 Venezuela</option>
                <option value="+84">+84 🇻🇳 Viet Nam</option>
                <option value="+1284">+1284 🇻🇬 Virgin Islands, British</option>
                <option value="+1340">+1340 🇻🇮 Virgin Islands, U.S.</option>
                <option value="+681">+681 🇼🇫 Wallis & Futuna</option>
                <option value="+212">+212 🇪🇭 Western Sahara</option>
                <option value="+967">+967 🇾🇪 Yemen</option>
                <option value="+260">+260 🇿🇲 Zambia</option>
                <option value="+263">+263 🇿🇼 Zimbabwe</option>
            </Form.Select>
            <Form.Control
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
        </Form.Group>

        {/* Rooms */}
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="number"
            min="1"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            placeholder="Number of Rooms"
          />
        </Form.Group>

        {/* Pax */}
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="number"
            min="1"
            name="pax"
            value={formData.pax}
            onChange={handleChange}
            placeholder="Number of Pax (Adults)"
          />
        </Form.Group>

        {/* Children */}
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            min="0"
            name="child"
            value={formData.child}
            onChange={handleChange}
            placeholder="Number of Children (Optional)"
          />
        </Form.Group>

        {/* Arrival Date */}
        <Form.Group className="mb-3" controlId="arrivalDate">
          <Form.Label>Arrival Date</Form.Label>
          <Form.Control
            required
            type="date"
            name="arrival_date"
            value={formData.arrival_date}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Custom Details (يظهر فقط في Custom Request) */}
        {formType === "custom" && (
          <Form.Group className="mb-3" controlId="customDetails">
            <Form.Label>Custom Details</Form.Label>
            <Form.Control
              as="textarea"
              name="customDetails"
              value={formData.customDetails}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your special requests, preferred dates, modifications, or any additional information..."
            />
          </Form.Group>
        )}

        {/* Submit Button */}
        <Button
          variant="primary"
          type="submit"
          style={{ background: "#fc4c03", borderColor: "#fc4c03", width: "100%" }}
        >
          {formType === "custom" ? "Send Custom Request" : "Book Now"}
        </Button>
      </Form>
    </div>
  );
}