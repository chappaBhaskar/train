import IrctcApp from "./IrctcApp";
import {HolidayCards} from  "./HolidayCards"


function App() {
  return (
    <div >

<h1 style={{textAlign:"center"}}>Have you not found the right one?
Find a service suitable for you here.</h1>
<div style={{
  display:"flex",
  gap:"60px"
}} >
     <IrctcApp imgUrl="https://tse3.mm.bing.net/th?id=OIP.JFhf9VEHHfFvIg-CZOoh1wHaHa&pid=Api&P=0&h=180 " 
     imgTitle="Flight"
     imgAlt="Flight"
     />

<IrctcApp imgUrl="https://tse4.mm.bing.net/th?id=OIP.qAST-gG53o9oTZ23QX4OnAHaHa&pid=Api&P=0&h=180 " 
     imgTitle="hotel"
     imgAlt="Hotel"
     />


<IrctcApp imgUrl="https://tse3.mm.bing.net/th?id=OIP.Ci4ns3JrHahKF9rKLdS5UwHaHc&pid=Api&P=0&h=180 " 
     imgTitle="E-Catring"
     imgAlt="E-Catring"
     />

<IrctcApp imgUrl="https://tse1.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&rs=1&c=1&qlt=95&w=147&h=98 " 
     imgTitle="hotel"
     imgAlt="Hotel"
     />
     <IrctcApp imgUrl="https://tse1.mm.bing.net/th?id=OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8&pid=Api&rs=1&c=1&qlt=95&w=147&h=98 " 
     imgTitle="hotel"
     imgAlt="Hotel"
     />


</div>
<h1>HOLIDAYS</h1>
<div style={{
  display:"flex",
  flexWrap:"wrap"
}}>
<HolidayCards hImg="https://www.irctc.co.in/nget/assets/images/exterior.jpg" htitle=" Maharajas' Express" hPara="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. 
It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>

<HolidayCards hImg="https://www.irctc.co.in/nget/assets/images/Thailand.jpg" htitle=" International Packages" hPara="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. 
It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six yearsBest deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, 
visa charges and overseas medical insurance to give you a hassle-free and memorable experience." />

<HolidayCards hImg="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg" htitle=" Domestic Air Packages" hPara="Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas,
 Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"/>

<HolidayCards hImg="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg" htitle=" Bharat Gaurav Tourist Train" hPara="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme 
based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage." />


<HolidayCards hImg="https://www.irctc.co.in/nget/assets/images/Manali.jpg" htitle="Rail Tour Packages" hPara="IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi,
 Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available." />

</div>


    </div>
  );
}

export default App;
