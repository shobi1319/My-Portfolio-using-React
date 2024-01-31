import { React } from "react";
import './Testimon.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the Swiper styles
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';

import { Pagination } from 'swiper/modules'; // Import from 'swiper/modules'








// Your component code goes here

const Testimon = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Work well done! Would surely hire again, and recommend for technical tasks as well.",
        },
        {
            img: profilePic2,
            review: "He is very skilled at what he is doing. I will definitely will work with him in the future",
        },
        {
            img: profilePic3,
            review: "Overall, I had an excellent experience working with Shoaib. I highly recommend him to anyone in need of a web developer, and I will certainly hire him again in the future if I require anything. Thank you, Shoaib, for your hard work and dedication to delivering exceptional results.",
        },
        {
            img: profilePic4,
            review: "Absolutely stellar service! The freelancer went above and beyond to ensure my complete satisfaction, ensuring that every aspect worked precisely as per my requirements. Their expertise in coding and programming is exceptional, showcasing remarkable knowledge. I'm thoroughly impressed and will undoubtedly return for more projects!!",
        },
    ];
    return(
        <div className="testimon-w" id="testimon">
<div className="test-heading">
    <span>Clients always get </span>
    <span>Exceptional Work </span>
    <span>from me ...</span>
    <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
    <div className="blur t-blur1" style={{background:'skyblue'}}></div>

</div>


<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable:true}}
>
{
   clients.map((client,index)=>{
    return(
        <SwiperSlide key={index}>
       <div className="testimonial">
       <img src={client.img} alt="" />
        <span>{client.review}</span>
       </div>
        </SwiperSlide>
    );
   })
}
</Swiper>
        </div>
    );
}
export default  Testimon; 