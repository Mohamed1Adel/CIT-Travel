import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "./OutboundTempDetails.scss";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Progress } from "../../progressComponent";
import { API_URL, MONGODB_URL } from "../../envData";
import FullProgress from './../../FullProgress';
import BookingForm from "../BookingForm";
function OutboundTempDetails() {
  const [outboundDetails, setOutboundDetails] = useState({value :""});
  const [images, setImages] = useState([]);
  const [title,setTitle] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState(0);
  const [rooms,setRooms] = useState(0);
  const [pax,setPax] = useState(0);
  const [child,setChild] = useState(0);

  const { id } = useParams();
   const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    rooms: '',
    pax: '',
    child: '',
   
  });
  // console.log(id);

  async function getProgramById() {
    try {
      const response = await fetch(`${MONGODB_URL}/getOutboundDetails/${id}`);
      const data = await response.json();
      // console.log(data);
      setOutboundDetails(data);
      setFormData({title : data?.title});
      setTitle(data?.title)
      // getImages();
    } catch (e) {
      // console.log(e);
    }
    // console.log(outboundDetails);
  }

    const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://cit-egypt.com/sendEmail.php', { // Replace with the actual path to your PHP script
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        title: '',
    name: '',
    email: '',
    phone: '',
    rooms: '',
    pax: '',
    child: '',
      });
    } else {
      alert('There was a problem with your submission. Please try again.');
    }
  };

  
  const sendMassage = (e) => {
    e.preventDefault();
    // console.log(form.current);
  
    //  emailjs
    //    .sendForm(
    //      "service_a5le1fd",
    //      "template_vjwhzni",
    //      form.current,
    //      "YZfMIBWVpK33gBYsx"
    //    )
    //    .then(
    //      (result) => {
    //        console.log(result.text);
    //      },
    //      (error) => {
    //        console.log(error.text);
    //      }
    //    );
    // console.log(title,name,email,phone,rooms,pax,child);

    var phonenumber = "+201100996929";

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Title :* "+title+"%0a"
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone:* "+phone+"%0a"
    +"*Rooms:* "+rooms+"%0a"
    +"*Pax:* "+pax+"%0a"
    +"*Child:* "+child+"%0a"
    +"%0a%0a"
    +"Hello CIT Travel";

    window.open(url, '_blank').focus();
  };
  useEffect(() => {
    getProgramById();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // State to hold the fetched data
  const [dataImg, setDataImg] = useState(null);
  // State to hold loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your PHP API
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        };
        const response = await axios.get(process.env.PUBLIC_URL + `/dropimg/g.php?id=${id}`);
        // Set the data in state
        setDataImg(response.data);
        // console.log(response.data);
        // Set loading state to false
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to ensure useEffect only runs once




  return (

    <Container>
          {
      outboundDetails.value != "" ?<div className="hotel-info">
      <Row className="align-items-center">
        <Col sm="12" md="3" lg="4">
          <div className="info-box">
            <ul>
              <h4 style={{ color: "#fc4c03" }}>{outboundDetails?.title}</h4>
              {/* <h5 style={{ color: "#fc4c03" }}>
                    <FontAwesomeIcon icon={faLocationDot} />{" "}
                    {outboundDetails.box6}
                  </h5> */}
              <h5>{outboundDetails?.description}</h5>
              {/* <div class="card-desc">
              <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.packInclude,
                    }}
                  />
              </div> */}
              {/* <h5>{outboundDetails?.box6}</h5> */}
              <h5>{outboundDetails?.box7}</h5>
              <h5>{outboundDetails?.box8}</h5>
              <h5>{outboundDetails?.box9}</h5>
              <h5>{outboundDetails?.box10}</h5>
            </ul>
          </div>
        </Col>
        <Col sm="12" md="9" lg="8">
          <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
          {dataImg?.length >= 1 ? (
                  dataImg?.map((img,i) => {
                    // console.log("images is loaded");
                    if(i<=dataImg.length - 2){
                       return (
                      <Carousel.Item key={Math.random()}>
                        <img src={process.env.PUBLIC_URL + `/dropimg/uploads/${dataImg[i]}`} alt="..." />
                      </Carousel.Item>
                    );
                    }
                   
                  })
                ) : (
                  <Progress />
                )}
          </Carousel>
        </Col>
      </Row>
      <Row className="my-5 book-rates">
        <Col sm="12" md="3" lg="4">
          <div className="book-form">
            <h2>Book Now</h2>
            {submitted ? (
        <div>Thank you! Your message has been sent.</div>
      ) : (
//                 <Form  onSubmit={handleSubmit}>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control
//                       required
//                       type="text"
//                       name="title"
//                        value={outboundDetails?.title}
                       
                      
//                       style={{ display: "none" }}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control
//                     required
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                         onChange={handleChange}
//                       placeholder="Your Name"
//                       //onChange={(e) => setName(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control
//                     required
//                       type="email"
//                       name="email"
//                       value={formData.emaiil}
//                         onChange={handleChange}
//                       placeholder="Your Email Address"
//                       //onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </Form.Group>
//                     <Form.Group className="mb-3" controlId="formPhoneGroup">
//                       <div style={{ display: "flex", gap: "10px" }}>
//                         <Form.Select
//                           required
//                           name="countryCode"
//                           value={formData.countryCode}
//                           onChange={handleChange}
//                           style={{ maxWidth: "100px" }}
//                         >
//                           <option value="">Code</option>
//                           <option value="+93">+93 🇦🇫 Afghanistan</option>
// <option value="+355">+355 🇦🇱 Albania</option>
// <option value="+213">+213 🇩🇿 Algeria</option>
// <option value="+1684">+1684 🇦🇸 American Samoa</option>
// <option value="+376">+376 🇦🇩 Andorra</option>
// <option value="+244">+244 🇦🇴 Angola</option>
// <option value="+1264">+1264 🇦🇮 Anguilla</option>
// <option value="+672">+672 🇦🇶 Antarctica</option>
// <option value="+1268">+1268 🇦🇬 Antigua & Barbuda</option>
// <option value="+54">+54 🇦🇷 Argentina</option>
// <option value="+374">+374 🇦🇲 Armenia</option>
// <option value="+297">+297 🇦🇼 Aruba</option>
// <option value="+61">+61 🇦🇺 Australia</option>
// <option value="+43">+43 🇦🇹 Austria</option>
// <option value="+994">+994 🇦🇿 Azerbaijan</option>
// <option value="+1242">+1242 🇧🇸 Bahamas</option>
// <option value="+973">+973 🇧🇭 Bahrain</option>
// <option value="+880">+880 🇧🇩 Bangladesh</option>
// <option value="+1246">+1246 🇧🇧 Barbados</option>
// <option value="+375">+375 🇧🇾 Belarus</option>
// <option value="+32">+32 🇧🇪 Belgium</option>
// <option value="+501">+501 🇧🇿 Belize</option>
// <option value="+229">+229 🇧🇯 Benin</option>
// <option value="+1441">+1441 🇧🇲 Bermuda</option>
// <option value="+975">+975 🇧🇹 Bhutan</option>
// <option value="+591">+591 🇧🇴 Bolivia</option>
// <option value="+387">+387 🇧🇦 Bosnia & Herz.</option>
// <option value="+267">+267 🇧🇼 Botswana</option>
// <option value="+55">+55 🇧🇷 Brazil</option>
// <option value="+246">+246 🇮🇴 British Indian Ocean Territory</option>
// <option value="+673">+673 🇧🇳 Brunei</option>
// <option value="+359">+359 🇧🇬 Bulgaria</option>
// <option value="+226">+226 🇧🇫 Burkina Faso</option>
// <option value="+257">+257 🇧🇮 Burundi</option>
// <option value="+855">+855 🇰🇭 Cambodia</option>
// <option value="+237">+237 🇨🇲 Cameroon</option>
// <option value="+1">+1 🇨🇦 Canada</option>
// <option value="+238">+238 🇨🇻 Cape Verde</option>
// <option value="+1345">+1345 🇰🇾 Cayman Islands</option>
// <option value="+236">+236 🇨🇫 Central African Rep.</option>
// <option value="+235">+235 🇹🇩 Chad</option>
// <option value="+56">+56 🇨🇱 Chile</option>
// <option value="+86">+86 🇨🇳 China</option>
// <option value="+61">+61 🇨🇽 Christmas Island</option>
// <option value="+61">+61 🇨🇨 Cocos (Keeling) Islands</option>
// <option value="+57">+57 🇨🇴 Colombia</option>
// <option value="+269">+269 🇰🇲 Comoros</option>
// <option value="+242">+242 🇨🇬 Congo</option>
// <option value="+243">+243 🇨🇩 Congo, Dem. Rep.</option>
// <option value="+682">+682 🇨🇰 Cook Islands</option>
// <option value="+506">+506 🇨🇷 Costa Rica</option>
// <option value="+225">+225 🇨🇮 Côte d'Ivoire</option>
// <option value="+385">+385 🇭🇷 Croatia</option>
// <option value="+53">+53 🇨🇺 Cuba</option>
// <option value="+357">+357 🇨🇾 Cyprus</option>
// <option value="+420">+420 🇨🇿 Czech Republic</option>
// <option value="+45">+45 🇩🇰 Denmark</option>
// <option value="+253">+253 🇩🇯 Djibouti</option>
// <option value="+1767">+1767 🇩🇲 Dominica</option>
// <option value="+1809">+1809 🇩🇴 Dominican Rep.</option>
// <option value="+593">+593 🇪🇨 Ecuador</option>
// <option value="+20">+20 🇪🇬 Egypt</option>
// <option value="+503">+503 🇸🇻 El Salvador</option>
// <option value="+240">+240 🇬🇶 Equatorial Guinea</option>
// <option value="+291">+291 🇪🇷 Eritrea</option>
// <option value="+372">+372 🇪🇪 Estonia</option>
// <option value="+251">+251 🇪🇹 Ethiopia</option>
// <option value="+500">+500 🇫🇰 Falkland Islands</option>
// <option value="+298">+298 🇫🇴 Faroe Islands</option>
// <option value="+679">+679 🇫🇯 Fiji</option>
// <option value="+358">+358 🇫🇮 Finland</option>
// <option value="+33">+33 🇫🇷 France</option>
// <option value="+594">+594 🇬🇫 French Guiana</option>
// <option value="+689">+689 🇵🇫 French Polynesia</option>
// <option value="+262">+262 🇹🇫 French Southern Territories</option>
// <option value="+241">+241 🇬🇦 Gabon</option>
// <option value="+220">+220 🇬🇲 Gambia</option>
// <option value="+995">+995 🇬🇪 Georgia</option>
// <option value="+49">+49 🇩🇪 Germany</option>
// <option value="+233">+233 🇬🇭 Ghana</option>
// <option value="+350">+350 🇬🇮 Gibraltar</option>
// <option value="+30">+30 🇬🇷 Greece</option>
// <option value="+299">+299 🇬🇱 Greenland</option>
// <option value="+1473">+1473 🇬🇩 Grenada</option>
// <option value="+590">+590 🇬🇵 Guadeloupe</option>
// <option value="+1671">+1671 🇬🇺 Guam</option>
// <option value="+502">+502 🇬🇹 Guatemala</option>
// <option value="+44">+44 🇬🇬 Guernsey</option>
// <option value="+224">+224 🇬🇳 Guinea</option>
// <option value="+245">+245 🇬🇼 Guinea-Bissau</option>
// <option value="+592">+592 🇬🇾 Guyana</option>
// <option value="+509">+509 🇭🇹 Haiti</option>
// <option value="+379">+379 🇻🇦 Holy See (Vatican City)</option>
// <option value="+504">+504 🇭🇳 Honduras</option>
// <option value="+852">+852 🇭🇰 Hong Kong</option>
// <option value="+36">+36 🇭🇺 Hungary</option>
// <option value="+354">+354 🇮🇸 Iceland</option>
// <option value="+91">+91 🇮🇳 India</option>
// <option value="+62">+62 🇮🇩 Indonesia</option>
// <option value="+98">+98 🇮🇷 Iran</option>
// <option value="+964">+964 🇮🇶 Iraq</option>
// <option value="+353">+353 🇮🇪 Ireland</option>
// <option value="+44">+44 🇮🇲 Isle of Man</option>
// <option value="+972">+972 🇮🇱 Israel</option>
// <option value="+39">+39 🇮🇹 Italy</option>
// <option value="+1876">+1876 🇯🇲 Jamaica</option>
// <option value="+81">+81 🇯🇵 Japan</option>
// <option value="+44">+44 🇯🇪 Jersey</option>
// <option value="+962">+962 🇯🇴 Jordan</option>
// <option value="+7">+7 🇰🇿 Kazakhstan</option>
// <option value="+254">+254 🇰🇪 Kenya</option>
// <option value="+686">+686 🇰🇮 Kiribati</option>
// <option value="+850">+850 🇰🇵 North Korea</option>
// <option value="+82">+82 🇰🇷 South Korea</option>
// <option value="+965">+965 🇰🇼 Kuwait</option>
// <option value="+996">+996 🇰🇬 Kyrgyzstan</option>
// <option value="+856">+856 🇱🇦 Lao P.D.R.</option>
// <option value="+371">+371 🇱🇻 Latvia</option>
// <option value="+961">+961 🇱🇧 Lebanon</option>
// <option value="+266">+266 🇱🇸 Lesotho</option>
// <option value="+231">+231 🇱🇷 Liberia</option>
// <option value="+218">+218 🇱🇾 Libya</option>
// <option value="+423">+423 🇱🇮 Liechtenstein</option>
// <option value="+370">+370 🇱🇹 Lithuania</option>
// <option value="+352">+352 🇱🇺 Luxembourg</option>
// <option value="+853">+853 🇲🇴 Macao</option>
// <option value="+389">+389 🇲🇰 Macedonia</option>
// <option value="+261">+261 🇲🇬 Madagascar</option>
// <option value="+265">+265 🇲🇼 Malawi</option>
// <option value="+60">+60 🇲🇾 Malaysia</option>
// <option value="+960">+960 🇲🇻 Maldives</option>
// <option value="+223">+223 🇲🇱 Mali</option>
// <option value="+356">+356 🇲🇹 Malta</option>
// <option value="+692">+692 🇲🇭 Marshall Islands</option>
// <option value="+596">+596 🇲🇶 Martinique</option>
// <option value="+222">+222 🇲🇷 Mauritania</option>
// <option value="+230">+230 🇲🇺 Mauritius</option>
// <option value="+262">+262 🇾🇹 Mayotte</option>
// <option value="+52">+52 🇲🇽 Mexico</option>
// <option value="+691">+691 🇫🇲 Micronesia</option>
// <option value="+373">+373 🇲🇩 Moldova</option>
// <option value="+377">+377 🇲🇨 Monaco</option>
// <option value="+976">+976 🇲🇳 Mongolia</option>
// <option value="+382">+382 🇲🇪 Montenegro</option>
// <option value="+1664">+1664 🇲🇸 Montserrat</option>
// <option value="+212">+212 🇲🇦 Morocco</option>
// <option value="+258">+258 🇲🇿 Mozambique</option>
// <option value="+95">+95 🇲🇲 Myanmar</option>
// <option value="+264">+264 🇳🇦 Namibia</option>
// <option value="+674">+674 🇳🇷 Nauru</option>
// <option value="+977">+977 🇳🇵 Nepal</option>
// <option value="+31">+31 🇳🇱 Netherlands</option>
// <option value="+599">+599 🇦🇳 Netherlands Antilles</option>
// <option value="+687">+687 🇳🇨 New Caledonia</option>
// <option value="+64">+64 🇳🇿 New Zealand</option>
// <option value="+505">+505 🇳🇮 Nicaragua</option>
// <option value="+227">+227 🇳🇪 Niger</option>
// <option value="+234">+234 🇳🇬 Nigeria</option>
// <option value="+683">+683 🇳🇺 Niue</option>
// <option value="+672">+672 🇳🇫 Norfolk Island</option>
// <option value="+1670">+1670 🇲🇵 Northern Mariana Islands</option>
// <option value="+47">+47 🇳🇴 Norway</option>
// <option value="+968">+968 🇴🇲 Oman</option>
// <option value="+92">+92 🇵🇰 Pakistan</option>
// <option value="+680">+680 🇵🇼 Palau</option>
// <option value="+970">+970 🇵🇸 Palestine</option>
// <option value="+507">+507 🇵🇦 Panama</option>
// <option value="+675">+675 🇵🇬 Papua New Guinea</option>
// <option value="+595">+595 🇵🇾 Paraguay</option>
// <option value="+51">+51 🇵🇪 Peru</option>
// <option value="+63">+63 🇵🇭 Philippines</option>
// <option value="+64">+64 🇵🇳 Pitcairn</option>
// <option value="+48">+48 🇵🇱 Poland</option>
// <option value="+351">+351 🇵🇹 Portugal</option>
// <option value="+1787">+1787 🇵🇷 Puerto Rico</option>
// <option value="+974">+974 🇶🇦 Qatar</option>
// <option value="+262">+262 🇷🇪 Reunion</option>
// <option value="+40">+40 🇷🇴 Romania</option>
// <option value="+7">+7 🇷🇺 Russian Federation</option>
// <option value="+250">+250 🇷🇼 Rwanda</option>
// <option value="+590">+590 🇧🇱 Saint Barthélemy</option>
// <option value="+290">+290 🇸🇭 Saint Helena</option>
// <option value="+1869">+1869 🇰🇳 Saint Kitts & Nevis</option>
// <option value="+1758">+1758 🇱🇨 Saint Lucia</option>
// <option value="+590">+590 🇲🇫 Saint Martin</option>
// <option value="+508">+508 🇵🇲 Saint Pierre & Miquelon</option>
// <option value="+1784">+1784 🇻🇨 Saint Vincent & the Grenadines</option>
// <option value="+685">+685 🇼🇸 Samoa</option>
// <option value="+378">+378 🇸🇲 San Marino</option>
// <option value="+239">+239 🇸🇹 Sao Tome & Principe</option>
// <option value="+966">+966 🇸🇦 Saudi Arabia</option>
// <option value="+221">+221 🇸🇳 Senegal</option>
// <option value="+381">+381 🇷🇸 Serbia</option>
// <option value="+248">+248 🇸🇨 Seychelles</option>
// <option value="+232">+232 🇸🇱 Sierra Leone</option>
// <option value="+65">+65 🇸🇬 Singapore</option>
// <option value="+421">+421 🇸🇰 Slovakia</option>
// <option value="+386">+386 🇸🇮 Slovenia</option>
// <option value="+677">+677 🇸🇧 Solomon Islands</option>
// <option value="+252">+252 🇸🇴 Somalia</option>
// <option value="+27">+27 🇿🇦 South Africa</option>
// <option value="+211">+211 🇸🇸 South Sudan</option>
// <option value="+34">+34 🇪🇸 Spain</option>
// <option value="+94">+94 🇱🇰 Sri Lanka</option>
// <option value="+249">+249 🇸🇩 Sudan</option>
// <option value="+597">+597 🇸🇷 Suriname</option>
// <option value="+47">+47 🇸🇯 Svalbard & Jan Mayen</option>
// <option value="+268">+268 🇸🇿 Swaziland</option>
// <option value="+46">+46 🇸🇪 Sweden</option>
// <option value="+41">+41 🇨🇭 Switzerland</option>
// <option value="+963">+963 🇸🇾 Syrian Arab Republic</option>
// <option value="+886">+886 🇹🇼 Taiwan</option>
// <option value="+992">+992 🇹🇯 Tajikistan</option>
// <option value="+255">+255 🇹🇿 Tanzania</option>
// <option value="+66">+66 🇹🇭 Thailand</option>
// <option value="+670">+670 🇹🇱 Timor-Leste</option>
// <option value="+228">+228 🇹🇬 Togo</option>
// <option value="+690">+690 🇹🇰 Tokelau</option>
// <option value="+676">+676 🇹🇴 Tonga</option>
// <option value="+1868">+1868 🇹🇹 Trinidad & Tobago</option>
// <option value="+216">+216 🇹🇳 Tunisia</option>
// <option value="+90">+90 🇹🇷 Turkey</option>
// <option value="+993">+993 🇹🇲 Turkmenistan</option>
// <option value="+1649">+1649 🇹🇨 Turks & Caicos Islands</option>
// <option value="+688">+688 🇹🇻 Tuvalu</option>
// <option value="+256">+256 🇺🇬 Uganda</option>
// <option value="+380">+380 🇺🇦 Ukraine</option>
// <option value="+971">+971 🇦🇪 United Arab Emirates</option>
// <option value="+44">+44 🇬🇧 United Kingdom</option>
// <option value="+1">+1 🇺🇸 United States</option>
// <option value="+598">+598 🇺🇾 Uruguay</option>
// <option value="+998">+998 🇺🇿 Uzbekistan</option>
// <option value="+678">+678 🇻🇺 Vanuatu</option>
// <option value="+58">+58 🇻🇪 Venezuela</option>
// <option value="+84">+84 🇻🇳 Viet Nam</option>
// <option value="+1284">+1284 🇻🇬 Virgin Islands, British</option>
// <option value="+1340">+1340 🇻🇮 Virgin Islands, U.S.</option>
// <option value="+681">+681 🇼🇫 Wallis & Futuna</option>
// <option value="+212">+212 🇪🇭 Western Sahara</option>
// <option value="+967">+967 🇾🇪 Yemen</option>
// <option value="+260">+260 🇿🇲 Zambia</option>
// <option value="+263">+263 🇿🇼 Zimbabwe</option>
//                         </Form.Select>
//                         <Form.Control
//                           required
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="Phone Number"
//                         />
//                       </div>
//                     </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control
//                     required
//                       type="tel"
//                       name="rooms"
//                       value={formData.rooms}
//                         onChange={handleChange}
//                       placeholder="Enter Number of Rooms"
//                       //onChange={(e) => setRooms(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control
//                     required
//                       type="text"
//                       name="pax"
//                       value={formData.pax}
//                         onChange={handleChange}
//                       placeholder="Enter Number of Pax"
//                       //onChange={(e) => setPax(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control
//                     required
//                       type="text"
//                       name="child"
//                       value={formData.child}
//                         onChange={handleChange}
//                       placeholder="Enter Number of Child"
//                       //onChange={(e) => setChild(e.target.value)}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="arrivalDate">
//                                       <Form.Label>Date</Form.Label>
//                                       <Form.Control
//                                         required
//                                         type="date"
//                                         name="arrival_date"
//                                         value={formData.arrival_date}
//                                         onChange={handleChange}
//                                       />
//                                     </Form.Group>
//                   <Button
//                     id="book-btn"
//                     variant="primary"
//                     type="submit"
//                     style={{ background: "#fc4c03", borderColor: "#fc4c03" }}
//                   >
//                     Book Now
//                   </Button>
//                 </Form>

<BookingForm
                  title={outboundDetails?.title}
                  onSubmitted={() => setSubmitted(true)}
                />
                  )}
          </div>
        </Col>
        <Col sm="12" md="9" lg="8">
          <div class="d-none card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs" id="tabs">
                <li class="nav-item">
                  <a class="nav-link" href="#rates" data-toggle="tab" style={{color:"#fc4c03",fontWeight:"bold",fontSize:"22px"}}>
                    Rates
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body ">
              <div class="tab-content">
                <div class="tab-pane " id="rates">
                  <div className=" main-table">
                  
                    <table class=" table-rates table outbound-rate-table-body">
                      <thead>
                        <tr>
                          <th scope="col">Destnation</th>
                          <th scope="col">Hotel</th>
                          <th scope="col">Single</th>
                          <th scope="col">Double</th>
                          <th scope="col">Triple</th>
                          <th scope="col">Child</th>
                        </tr>
                      </thead>
                      <tbody>
                        {outboundDetails?.PackhotelsAndPrices?.map((pack) => {
                          return (
                            <tr>
                              <th scope="row">
                                <th
                                  className="d-block"
                                  style={{
                                    height: "40px",
                                    borderBottom: "1px solid #bebebe",
                                  }}
                                >
                                  {pack.hotel[0].hotelLocation}
                                </th>
                                <th style={{ height: "40px" }}>
                                  {pack.hotel[1].hotelLocation}
                                </th>
                              </th>
                              <th scope="row">
                                <th
                                  style={{
                                    height: "40px",
                                    borderBottom: "1px solid #bebebe",
                                  }}
                                  className="d-block"
                                >
                                  {pack.hotel[0].hotelName}
                                </th>
                                <th style={{ height: "40px" }}>
                                  {pack.hotel[1].hotelName}
                                </th>
                              </th>
                              <td>{pack.single}  EGP</td>
                              <td>{pack.double} EGP</td>
                              <td>{pack.triple} EGP</td>
                              <td>{pack.child} EGP</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-center mt-3">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs" id="tabs">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#cancellation-polices"
                    data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                  >
                    Itenary
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#Package-Includes"
                    data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}
                  >
                    Include
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#Package-Excludes"
                    data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}
                  >
                    Exclude
                  </a>
                </li>

                {/* <li class="nav-item">
                  <a class="nav-link" href="#fly-details" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                    Fly details
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                    Terms & Conditions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#cancelation-policy" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                  Cancelation 
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#visa" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                    Visa
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#notes" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"15px"}}>
                    Notes
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body ">
              <div class="tab-content">
                <div class="tab-pane active" id="cancellation-polices">
                  <Accordion
                    className="itenary-accordion"
                    defaultActiveKey="0"
                  >
                    {outboundDetails?.itenary?.map((day, index) => {
                      return (
                        <Accordion.Item eventKey={`${index + 1}`}>
                          <Accordion.Header>
                            Day {index + 1} {"  "}
                            &nbsp; <FontAwesomeIcon icon={faArrowRight} />
                            &nbsp;{"  "}
                            {day.dayTitle}
                          </Accordion.Header>
                          <Accordion.Body style={{ color: "#000" }}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: day?.dayContent,
                              }}
                            />
                            {
                              day?.optTour && day.optTour.trim() !== "<p><br></p>" ? (
                                <>
                                  <h4 style={{ fontWeight: "bold", color: "red" }}>Optional Tours</h4>
                                  <div
                                    style={{ marginTop: "10px" }}
                                    dangerouslySetInnerHTML={{
                                      __html: day?.optTour,
                                    }}
                                  />
                                </>
                              ) : (
                                ""
                              )
                            }

                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
                <div class="tab-pane " id="Package-Includes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.packInclude,
                    }}
                  />
                </div>
                <div class="tab-pane" id="Package-Excludes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.packExclude,
                    }}
                  />
                </div>
                <div class="tab-pane" id="notes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.notes,
                    }}
                  />
                </div>
                <div class="tab-pane" id="visa">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.visa,
                    }}
                  />
                </div>
                {/* <div class="tab-pane" id="fly-details">
                  <img src={outboundDetails?.flyDetails[0].img_url} style={{maxWidth:"100%"}} alt="flyImage" />
                </div> */}
                <div class="tab-pane" id="terms">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.termsAndConditions,
                    }}
                  />
                </div>
                <div class="tab-pane" id="cancelation-policy">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: outboundDetails?.canceltion,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div> : <FullProgress />
    }
      </Container>
  );
}

export default OutboundTempDetails;
