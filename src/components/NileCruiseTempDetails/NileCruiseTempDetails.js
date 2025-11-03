import React, { useState, useEffect } from "react";
import { Accordion, Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./NileCruiseTempDetails.scss";
// import Accordion from 'react-bootstrap/Accordion';
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {API_URL, MONGODB_URL} from '../../envData'
import { Progress } from "../../progressComponent";
import FullProgress from "../../FullProgress";
import axios from "axios";
function NileCruiseTempDetails() {
  const [nileCruiseDetails, setNileCruiseDetails] = useState({value:""});
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
  async function getDomesticById() {
    try {
      // const response = await fetch(`${API_URL}/nileCruise/${id}`);
      const response = await fetch(`${MONGODB_URL}/getNileCruiseDetails/${id}`);
      const data = await response.json();
      // console.log(data);
      setNileCruiseDetails(data);
      setFormData({title : data?.title});
      setTitle(data?.title)
      getImages();
    } catch (e) {
      // console.log(e);
    }
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

  const getImages = async () => {
    setImages(nileCruiseDetails?.images);
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
    getDomesticById();
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
        nileCruiseDetails.value !="" ?  <div className="hotel-info">
        <Row className="align-items-center">
          <Col sm="12" md="3" lg="4">
            <div className="info-box position-relative">
              <ul>
                <h4 style={{ color: "#fc4c03" }}>{nileCruiseDetails?.title}</h4>
                
               
                
                
                <h5 style={{ color: "#fc4c03" }} >
                  {/* <FontAwesomeIcon icon={faLocationDot} />{" "} */}
                  {nileCruiseDetails?.destination}
                </h5>

                 {/* {
              nileCruiseDetails?.title === "Luxor - Cairo / Long Cruise " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"18px"}}>Starting from 28000 EGP </h6>: ""
            }
            {
              nileCruiseDetails?.title === "Aswan - Cairo / Long Cruise" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"18px"}}>Starting from 37000 EGP </h6>: ""
            } */}
            {/* {
              nileCruiseDetails?.destination === "4 Days / 3 Nights " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"14px",position: "absolute",
                top: "60px",
                right: "10px"}}>Starting from 385 $ </h6>: ""
            }
            {
              nileCruiseDetails?.destination === "5 Days / 4 Nights " ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"14px",position: "absolute",
                top: "60px",
                right: "10px"}}>Starting from 475 $ </h6>: ""
            }
            {
              nileCruiseDetails?.destination === "8 Days/ 7 Nights" ?  <h6 style={{color:"#fc4c03",display:"block",zIndex:"999",fontSize:"14px",position: "absolute",
                top: "60px",
                right: "10px"}}>Starting from 700 $ </h6>: ""
            } */}
            <h6 style={{  }}>{nileCruiseDetails?.description}</h6>
            <h6 >{nileCruiseDetails?.box6}</h6>
                <h6 >{nileCruiseDetails?.box7}</h6>
                <h6 >{nileCruiseDetails?.box8}</h6>
                <h6 >{nileCruiseDetails?.box9}</h6>
                <h6 >{nileCruiseDetails?.box10}</h6>
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
                  // return (
                  //   <Carousel.Item key={Math.random()}>
                  //     <img src={img.img_url} alt="..." />
                  //   </Carousel.Item>
                  // );
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
                <Form  onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                      required
                      type="text"
                      name="title"
                       value={nileCruiseDetails?.title}
                       
                      
                      style={{ display: "none" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="text"
                      name="name"
                      value={formData.name}
                        onChange={handleChange}
                      placeholder="Your Name"
                      //onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    required
                      type="email"
                      name="email"
                      value={formData.emaiil}
                        onChange={handleChange}
                      placeholder="Your Email Address"
                      //onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                                      <Form.Group className="mb-3" controlId="formPhoneGroup">
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Form.Select
                          required
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          style={{ maxWidth: "100px" }}
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
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="tel"
                      name="rooms"
                      value={formData.rooms}
                        onChange={handleChange}
                      placeholder="Enter Number of Rooms"
                      //onChange={(e) => setRooms(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="text"
                      name="pax"
                      value={formData.pax}
                        onChange={handleChange}
                      placeholder="Enter Number of Pax"
                      //onChange={(e) => setPax(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                    required
                      type="text"
                      name="child"
                      value={formData.child}
                        onChange={handleChange}
                      placeholder="Enter Number of Child"
                      //onChange={(e) => setChild(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="arrivalDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      name="arrival_date"
                      value={formData.arrival_date}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button
                    id="book-btn"
                    variant="primary"
                    type="submit"
                    style={{ background: "#fc4c03", borderColor: "#fc4c03" }}
                  >
                    Book Now
                  </Button>
                </Form>
                  )}
            </div>
          </Col>
          <Col sm="12" md="9" lg="8">
            <div
              class="card bottom-card text-center"
              style={{ width: "100% !important" }}
            >
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" id="tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="#rates" data-toggle="tab" style={{color:"#fc4c03",fontWeight:"bold",fontSize:"22px"}}>
                     

                      {
              nileCruiseDetails?.title === "Luxor - Cairo / Long Cruise " ?  " Starting from 28000 EGP": ""
            }
            {
              nileCruiseDetails?.title === "Aswan - Cairo / Long Cruise" ?  " Starting from 37000 EGP": ""
            }
            {
              nileCruiseDetails?.destination === "4 Days - 3 Nights" ?  " Starting from 550 $": ""
            }
            {
              nileCruiseDetails?.destination === "5 Days - 4 Nights" ?  " Starting from 670 $": ""
            }
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body tabs-card">
                <div class="tab-content">
                  <div class="tab-pane " id="rates">
                    <div className=" main-table">
                   
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Package</th>
                            <th scope="col">From</th>
                            <th scope="col">to</th>
                            <th scope="col">Single</th>
                            <th scope="col">Double</th>
                            <th scope="col">Triple</th>
                          </tr>
                        </thead>
                        <tbody>
                          {nileCruiseDetails?.packages?.map((pack,i) => {
                            return (
                              nileCruiseDetails?.destination == "5 Days / 4 Nights " && i == 2 ?
                              ""
                          //   <tr>
                          //    <th scope="row">XMAS Cruise 23 December 2024 (EX.Luxor)</th>
                          //    <td></td>
                          //    <td></td>
                          //    <td>{pack.single} {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                          //    <td>{pack.double}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                          //    <td>{pack.triple}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                          //  </tr> 
                          //  :nileCruiseDetails?.destination == "5 Days / 4 Nights " && i == 3 ? <tr>
                          //    <th scope="row">New Year 30 December 2024 (EX.Luxor)</th>
                          //    <td></td>
                          //    <td></td>
                          //    <td>{pack.single}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                          //    <td>{pack.double}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                          //    <td>{pack.triple}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                          //  </tr> 
                        //    :
                        //    nileCruiseDetails?.destination == "5 Days / 4 Nights" && i == 2 && nileCruiseDetails?.egypt_cruise == true ? <tr>
                        //    <th scope="row">XMAS Cruise 23 December 2024 (EX.Luxor)</th>
                        //    <td></td>
                        //    <td></td>
                        //    <td>{pack.single}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                        //    <td>{pack.double}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                        //    <td>{pack.triple}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                        //  </tr> 
                      //    :
                      //    nileCruiseDetails?.destination == "5 Days / 4 Nights" && i == 3 && nileCruiseDetails?.egypt_cruise == true ? <tr>
                      //    <th scope="row">New Year 30 December 2024 (EX.Luxor)</th>
                      //    <td></td>
                      //    <td></td>
                      //    <td>{pack.single}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                      //    <td>{pack.double}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                      //    <td>{pack.triple}  {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                      //  </tr> 
                       :
                           <tr>
                             <th scope="row">{pack.packTitle}</th>
                             <td>{pack.startDate?.split('-').reverse().join('-')}</td>
                             <td>{pack.endDate?.split('-').reverse().join('-')}</td>
                             <td>{pack.single} {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                             <td>{pack.double} {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
                             <td>{pack.triple} {nileCruiseDetails.egypt_cruise === true ? 'EGP' : '$'}</td>
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
                    <a class="nav-link" href="#itenary" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                    Itinerary

                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#include" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Include
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#exclude" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Exclude
                    </a>
                  </li>
                
                  <li class="nav-item">
                    <a class="nav-link" href="#terms" data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}>
                      Terms & Conditions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#cancellation-polices"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Cancellation
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#children-polices"
                      data-toggle="tab"style={{color:"#fc4c03",fontWeight:"bold",fontSize:"16px"}}
                    >
                      Children Polices
                    </a>
                  </li>

                </ul>
              </div>
              <div class="card-body ">
                <div class="tab-content">
                  <div class="tab-pane active" id="itenary">
                    
                    <Accordion
                      className="itenary-accordion"
                      defaultActiveKey="0"
                      // flush
                    >
                      {nileCruiseDetails?.itenary?.map((day, index) => {
                        return (
                          <Accordion.Item eventKey={`${index + 1}`}>
                            <Accordion.Header>
                              Day {index + 1} {"  "}
                              &nbsp; 
                              {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                              &nbsp;{"  "}
                              {day.dayTitle}
                            </Accordion.Header>
                            <Accordion.Body>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: day?.dayContent,
                                }}
                              />

{
                              day?.hasOwnProperty('optTour') ?
                              day?.optTour !== "<p><br></p>" ? 

                              day?.optTour !=="<p> </p>" ?
                              <>

                              <h4 style={{fontWeight:"bold",color:"red"}}>Optional Tours</h4>
                              <div
                            style={{marginTop:"10px"}}
                              dangerouslySetInnerHTML={{
                                __html: day?.optTour,
                              }}
                            />
                              </>
                              : "":"" :""
                            }
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion>
                  </div>
                  <div class="tab-pane" id="include">
                    

                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.include,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="exclude">
                    

                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.exclude,
                      }}
                    />
                  </div>
                  
                  <div class="tab-pane" id="terms">
                  
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.termsAndConditions,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="cancellation-polices">
                    
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.cancellation,
                      }}
                    />
                  </div>
                  <div class="tab-pane" id="children-polices">
                    
                    <div
                      dangerouslySetInnerHTML={{
                        __html: nileCruiseDetails?.children,
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>: <FullProgress />
      }
     
    </Container>
  );
}

export default NileCruiseTempDetails;
// import { Button, Col, Container, Row } from "react-bootstrap";
// import "./TembDetails.scss";
// import Carousell from "../Carousell/Carousell";
// import Form from "react-bootstrap/Form";
// import { useParams } from "react-router-dom";
// import {domesticsData} from "../../data/Domesticsdata"
// function TembDetails() {
//   const  {id} = useParams()

//   const [state , setState] = useState("")

//   useEffect(()=>{
//    const e =  domesticsData.filter((item)=>{
//      return item.id === id
//     });
//     setState(e[0])
//   },[id])
//   console.log(state);
//   // console.log(id);
//   return (
//     <Container>
//       <div className="hotel-info">
//         <Row className="align-items-center">
//           <Col sm="12" md="3" lg="4">
//             <div className="info-box">
//               <ul>
//                 <h3>Hotel Name:</h3>
//                 <h4>{state.title}</h4>
//                 <h3>Destination</h3>
//                 <h4>{state.location}</h4>
//                 <h4> {state.dur.days} Days / {state.dur.nights} Nights</h4>
//                 <h3>Dates:</h3>
//                 <h4>25/09/2023</h4>
//                 <h3>Upon request</h3>
//                 <h4>-------</h4>
//               </ul>
//             </div>
//           </Col>
//           <Col sm="12" md="9" lg="8">
//             <Carousell />
//           </Col>
//         </Row>
//         <Row className="my-5">
//           <Col sm="12" md="9" lg="8">
//             <div class="card text-center">
//               <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
//                   <li class="nav-item">
//                     <a
//                       class="active nav-link active"
//                       href="#package"
//                       data-toggle="tab"
//                     >
//                       Package
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#hotels-rates" data-toggle="tab">
//                       Hotels & Rates
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#optional-tour" data-toggle="tab">
//                       Optional tours
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#children" data-toggle="tab">
//                       Children Policy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#terms" data-toggle="tab">
//                       terms & Conditions
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="card-body">
//                 <div class="tab-content">
//                   <div class="tab-pane active" id="package">
//                     <h5>Package Include</h5>

//                   </div>
//                   <div class="tab-pane" id="hotels-rates">
//                     Hotels
//                   </div>
//                   <div class="tab-pane" id="optional-tour">
//                     optional-tour
//                   </div>
//                   <div class="tab-pane" id="children">
//                     children
//                   </div>
//                   <div class="tab-pane" id="terms">
//                     terms
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col sm="12" md="3" lg="4">
//             <div className="book-form">
//               <h2>Book Now</h2>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Your Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control type="email" placeholder="Your Email Address" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicNumber">
//                   <Form.Control type="text" placeholder="Your Phone Number" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Rooms"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Enter Number of Pax" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Child"
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                   Book Now
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default TembDetails;

// import React, { useState, useEffect } from "react";
// import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
// import "./TembDetails.scss";
// import Carousell from "../Carousell/Carousell";
// import Form from "react-bootstrap/Form";
// import { useParams } from "react-router-dom";
// import { domesticsData } from "../../data/Domesticsdata";
// import show from '../../images/show.jpeg';
// import show1 from '../../images/show1.jpeg';
// import show2 from '../../images/show2.jpeg';
// import show3 from '../../images/show3.jpeg';
// import show4 from '../../images/show4.jpeg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// function TembDetails() {
//   const { id } = useParams();

//   const [state, setState] = useState("");

//   useEffect(() => {
//     const e = domesticsData.filter((item) => {
//       return item.id === id;
//     });
//     setState(e[0]);
//   }, [id]);
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };
//   console.log(state);
//   // console.log(id);
//   return (
//     <Container>
//       <div className="hotel-info">
//         <Row className="align-items-center">
//           <Col sm="12" md="3" lg="4">
//             <div className="info-box">
//               <ul>
//                 <h4>Hotel Name:</h4>
//                 <h5>
//                   Movenpick Aquapark Resort & Spa Soma Bay <br />{" "}
//                   {
//                     <>
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                       <FontAwesomeIcon className="star" icon={faStar} />
//                     </>
//                   }{" "}
//                 </h5>
//                 <h5>Location : Hurghada</h5>
//                 {/* <h3>Destination</h3> */}
//                 {/* <h4>{state.location}</h4> */}
//                 {/* <h4> {state.dur.days} Days / {state.dur.nights} Nights</h4> */}
//                 <h4>Duration Period:</h4>
//                 <h5>from 25/09/2023</h5>
//                 <h5> to 25/09/2023</h5>
//                 {/* <h3>Upon request</h3>
//                 <h4>-------</h4> */}
//               </ul>
//             </div>
//           </Col>
//           <Col sm="12" md="9" lg="8">
//             <Carousel activeIndex={index} onSelect={handleSelect}>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show1} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show2} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show3} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 {/* <ExampleCarouselImage text="First slide" /> */}
//                 <img src={show4} alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>
//                     Nulla vitae elit libero, a pharetra augue mollis interdum.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </Col>
//         </Row>
//         <Row className="my-5">
//           <Col sm="12" md="9" lg="8">
//             <div class="card text-center">
//               <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
//                   <li class="nav-item">
//                     <a class="nav-link" href="#rates" data-toggle="tab">
//                       Rates
//                     </a>
//                   </li>
//                   {/* <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#cancellation-polices"
//                       data-toggle="tab"
//                     >
//                       Cancellation Polices
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#children" data-toggle="tab">
//                       Children Policy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#terms" data-toggle="tab">
//                       terms & Conditions
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#document-required"
//                       data-toggle="tab"
//                     >
//                       Required Docs
//                     </a>
//                   </li> */}
//                 </ul>
//               </div>
//               <div class="card-body ">
//                 <div class="tab-content">
//                   <div class="tab-pane " id="rates">
//                     <div className=" main-table">
//                       <h6>Duration</h6>
//                       <table class="table">
//                         <thead>
//                           <tr>
//                             <th scope="col">room type</th>
//                             <th scope="col">duration</th>
//                             <th scope="col">from</th>
//                             <th scope="col">to</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">clasic room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">clasic room lagon</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room lagon </th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>@15/10/2023</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="trips-tables d-flex">
//                       <div className="t">
//                         <h6 className="trip-heading">4 Days / 3 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">9,260</th>
//                               <td>5,790</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,080</th>
//                               <td>6,300</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">9,600</th>
//                               <td>5,990</td>
//                               <td>5,890</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,320</th>
//                               <td>6,440</td>
//                               <td>6,340</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                       <div className="t">
//                         <h6 className="trip-heading">5 Days / 4 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">12,350</th>
//                               <td>7,720</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,440</th>
//                               <td>8,400</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">12,800</th>
//                               <td>7,990</td>
//                               <td>7,850</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,760</th>
//                               <td>8,590</td>
//                               <td>8,450</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                   {/* <div class="tab-pane" id="cancellation-polices">
//                     <h4>Cancelation & No Show Plocies:</h4>
//                     <ul>
//                       <li>
//                         <h5> During Normal & Low Periods:</h5>
//                         <ul>
//                           <li>
//                             any cancellation 48 Hrs prior to arrival, will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to one night fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>During High & Peak Periods:</h5>
//                         <ul>
//                           <li>
//                             Any cancellation 07 Days prior to arrival will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             Any cancellation 48 Hrs prior to arrival will be
//                             subject to 50% of the whole stay fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to full stay fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         Payment within above time frame is non-refoundable
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="children">
//                     <h4>Children Polices : </h4>
//                     <ul>
//                       <li>
//                         <h5>Classic room : </h5>
//                         <ul>
//                           <li>
//                             ne child up to 12 years old is free of charge
//                             without an extra bed.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children up to 6 years old)
//                             - Double room (2 adults + 1 child)
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>Deluxe room : </h5>
//                         <ul>
//                           <li>e first child up to 12 years old is free.</li>
//                           <li>
//                             The second child up to 6 years old is free of
//                             charge, and from 6 years old up to 12 years old, 50%
//                             of the price per person in a double room with an
//                             extra bed is paid.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children) - Double room (2
//                             adults + 2 children) - Triple room (3 adults + 1
//                             child)
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="terms">
//                     <h4>Terms and Conditions</h4>
//                     <ul>
//                       <li>
//                         Prices include accommodation at the Mövenpick Aqua Park
//                         Hotel - Soma Bay
//                       </li>
//                       <li>First row from the sea - large sandy beach</li>
//                       <li>
//                         The hotel contains the latest aquapark for adults and
//                         children, free of charge
//                       </li>
//                       <li>
//                         Prices include full board (breakfast, lunch, dinner,
//                         snacks and non-alcoholic drinks) Soft All Inclusive
//                       </li>
//                       <li>
//                         All rooms contain a minibar, bottled water, Nescafe, and
//                         tea, which are replenished daily.
//                       </li>
//                       <li>
//                         To book a room with a sea view, 250 pounds will be added
//                         per night to the price of the deluxe room overlooking
//                         the pool.
//                       </li>
//                       <li>
//                         {" "}
//                         To book a family room, 750 pounds per night will be
//                         added to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                       <li>
//                         To book a deluxe suite, 1,250 pounds will be added per
//                         night to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="document-required">
//                     <h5>Documents required at the hotel:-</h5>
//                     <h6>
//                       Photos of ID cards - Photos of birth certificates - Photos
//                       of marriage certificate.
//                     </h6>
//                     <h6>
//                       The above prices do not include transfers, and transfers
//                       can be booked for 450 pounds per chair, one way.
//                     </h6>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             <div class="card text-center mt-3">
//               <div class="card-header">
//                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
//                   {/* <li class="nav-item">
//                     <a class="nav-link" href="#rates" data-toggle="tab">
//                       Rates
//                     </a>
//                   </li> */}
//                   <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#cancellation-polices"
//                       data-toggle="tab"
//                     >
//                       Cancellation Polices
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#children" data-toggle="tab">
//                       Children Policy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#terms" data-toggle="tab">
//                       terms & Conditions
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a
//                       class="nav-link"
//                       href="#document-required"
//                       data-toggle="tab"
//                     >
//                       Required Docs
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="card-body ">
//                 <div class="tab-content">
//                   {/* <div class="tab-pane " id="rates">
//                     <div className=" main-table">
//                       <h6>Duration</h6>
//                       <table class="table">
//                         <thead>
//                           <tr>
//                             <th scope="col">room type</th>
//                             <th scope="col">duration</th>
//                             <th scope="col">from</th>
//                             <th scope="col">to</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row">clasic room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">clasic room lagon</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room</th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>15/10/2023</td>
//                           </tr>
//                           <tr>
//                             <th scope="row">delux room lagon </th>
//                             <td>summer</td>
//                             <td>20/09/2023</td>
//                             <td>@15/10/2023</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="trips-tables d-flex">
//                       <div className="t">
//                         <h6 className="trip-heading">4 Days / 3 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">9,260</th>
//                               <td>5,790</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,080</th>
//                               <td>6,300</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">9,600</th>
//                               <td>5,990</td>
//                               <td>5,890</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">10,320</th>
//                               <td>6,440</td>
//                               <td>6,340</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                       <div className="t">
//                         <h6 className="trip-heading">5 Days / 4 Nights Trip</h6>
//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th scope="col">single room</th>
//                               <th scope="col">double room</th>
//                               <th scope="col">triple room</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <th scope="row">12,350</th>
//                               <td>7,720</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,440</th>
//                               <td>8,400</td>
//                               <td>N/A</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">12,800</th>
//                               <td>7,990</td>
//                               <td>7,850</td>
//                             </tr>
//                             <tr>
//                               <th scope="row">13,760</th>
//                               <td>8,590</td>
//                               <td>8,450</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div> */}
//                   <div class="tab-pane active" id="cancellation-polices">
//                     <h4>Cancelation & No Show Plocies:</h4>
//                     <ul>
//                       <li>
//                         <h5> During Normal & Low Periods:</h5>
//                         <ul>
//                           <li>
//                             any cancellation 48 Hrs prior to arrival, will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to one night fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>During High & Peak Periods:</h5>
//                         <ul>
//                           <li>
//                             Any cancellation 07 Days prior to arrival will be
//                             subject to one night cancellation fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             Any cancellation 48 Hrs prior to arrival will be
//                             subject to 50% of the whole stay fee based on
//                             confirmed rate.
//                           </li>
//                           <li>
//                             All No Show will be subject to full stay fee based
//                             on confirmed rate.
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         Payment within above time frame is non-refoundable
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="children">
//                     <h4>Children Polices : </h4>
//                     <ul>
//                       <li>
//                         <h5>Classic room : </h5>
//                         <ul>
//                           <li>
//                             ne child up to 12 years old is free of charge
//                             without an extra bed.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children up to 6 years old)
//                             - Double room (2 adults + 1 child)
//                           </li>
//                         </ul>
//                       </li>
//                       <li>
//                         <h5>Deluxe room : </h5>
//                         <ul>
//                           <li>e first child up to 12 years old is free.</li>
//                           <li>
//                             The second child up to 6 years old is free of
//                             charge, and from 6 years old up to 12 years old, 50%
//                             of the price per person in a double room with an
//                             extra bed is paid.
//                           </li>
//                           <li>
//                             Single room (1 adult + 2 children) - Double room (2
//                             adults + 2 children) - Triple room (3 adults + 1
//                             child)
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="terms">
//                     <h4>Terms and Conditions</h4>
//                     <ul>
//                       <li>
//                         Prices include accommodation at the Mövenpick Aqua Park
//                         Hotel - Soma Bay
//                       </li>
//                       <li>First row from the sea - large sandy beach</li>
//                       <li>
//                         The hotel contains the latest aquapark for adults and
//                         children, free of charge
//                       </li>
//                       <li>
//                         Prices include full board (breakfast, lunch, dinner,
//                         snacks and non-alcoholic drinks) Soft All Inclusive
//                       </li>
//                       <li>
//                         All rooms contain a minibar, bottled water, Nescafe, and
//                         tea, which are replenished daily.
//                       </li>
//                       <li>
//                         To book a room with a sea view, 250 pounds will be added
//                         per night to the price of the deluxe room overlooking
//                         the pool.
//                       </li>
//                       <li>
//                         {" "}
//                         To book a family room, 750 pounds per night will be
//                         added to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                       <li>
//                         To book a deluxe suite, 1,250 pounds will be added per
//                         night to the price of the deluxe room overlooking the
//                         pool.
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="tab-pane" id="document-required">
//                     <h5>Documents required at the hotel:-</h5>
//                     <h6>
//                       Photos of ID cards - Photos of birth certificates - Photos
//                       of marriage certificate.
//                     </h6>
//                     <h6>
//                       The above prices do not include transfers, and transfers
//                       can be booked for 450 pounds per chair, one way.
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//           <Col sm="12" md="3" lg="4">
//             <div className="book-form">
//               <h2>Book Now</h2>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Your Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control type="email" placeholder="Your Email Address" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicNumber">
//                   <Form.Control type="text" placeholder="Your Phone Number" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Rooms"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control type="text" placeholder="Enter Number of Pax" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter Number of Child"
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                   Book Now
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default TembDetails;
// // import React ,{useState,useEffect}from "react";
// // import { Button, Col, Container, Row } from "react-bootstrap";
// // import "./TembDetails.scss";
// // import Carousell from "../Carousell/Carousell";
// // import Form from "react-bootstrap/Form";
// // import { useParams } from "react-router-dom";
// // import {domesticsData} from "../../data/Domesticsdata"
// // function TembDetails() {
// //   const  {id} = useParams()

// //   const [state , setState] = useState("")

// //   useEffect(()=>{
// //    const e =  domesticsData.filter((item)=>{
// //      return item.id === id
// //     });
// //     setState(e[0])
// //   },[id])
// //   console.log(state);
// //   // console.log(id);
// //   return (
// //     <Container>
// //       <div className="hotel-info">
// //         <Row className="align-items-center">
// //           <Col sm="12" md="3" lg="4">
// //             <div className="info-box">
// //               <ul>
// //                 <h3>Hotel Name:</h3>
// //                 <h4>{state.title}</h4>
// //                 <h3>Destination</h3>
// //                 <h4>{state.location}</h4>
// //                 <h4> {state.dur.days} Days / {state.dur.nights} Nights</h4>
// //                 <h3>Dates:</h3>
// //                 <h4>25/09/2023</h4>
// //                 <h3>Upon request</h3>
// //                 <h4>-------</h4>
// //               </ul>
// //             </div>
// //           </Col>
// //           <Col sm="12" md="9" lg="8">
// //             <Carousell />
// //           </Col>
// //         </Row>
// //         <Row className="my-5">
// //           <Col sm="12" md="9" lg="8">
// //             <div class="card text-center">
// //               <div class="card-header">
// //                 <ul class="nav nav-tabs card-header-tabs" id="tabs">
// //                   <li class="nav-item">
// //                     <a
// //                       class="active nav-link active"
// //                       href="#package"
// //                       data-toggle="tab"
// //                     >
// //                       Package
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#hotels-rates" data-toggle="tab">
// //                       Hotels & Rates
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#optional-tour" data-toggle="tab">
// //                       Optional tours
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#children" data-toggle="tab">
// //                       Children Policy
// //                     </a>
// //                   </li>
// //                   <li class="nav-item">
// //                     <a class="nav-link" href="#terms" data-toggle="tab">
// //                       terms & Conditions
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </div>
// //               <div class="card-body">
// //                 <div class="tab-content">
// //                   <div class="tab-pane active" id="package">
// //                     <h5>Package Include</h5>

// //                   </div>
// //                   <div class="tab-pane" id="hotels-rates">
// //                     Hotels
// //                   </div>
// //                   <div class="tab-pane" id="optional-tour">
// //                     optional-tour
// //                   </div>
// //                   <div class="tab-pane" id="children">
// //                     children
// //                   </div>
// //                   <div class="tab-pane" id="terms">
// //                     terms
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </Col>
// //           <Col sm="12" md="3" lg="4">
// //             <div className="book-form">
// //               <h2>Book Now</h2>
// //               <Form>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control type="text" placeholder="Your Name" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicEmail">
// //                   <Form.Control type="email" placeholder="Your Email Address" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicNumber">
// //                   <Form.Control type="text" placeholder="Your Phone Number" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control
// //                     type="text"
// //                     placeholder="Enter Number of Rooms"
// //                   />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control type="text" placeholder="Enter Number of Pax" />
// //                 </Form.Group>
// //                 <Form.Group className="mb-3" controlId="formBasicName">
// //                   <Form.Control
// //                     type="text"
// //                     placeholder="Enter Number of Child"
// //                   />
// //                 </Form.Group>
// //                 <Button variant="primary" type="submit">
// //                   Book Now
// //                 </Button>
// //               </Form>
// //             </div>
// //           </Col>
// //         </Row>
// //       </div>
// //     </Container>
// //   );
// // }

// // export default TembDetails;
