/*import ImageSlider, { Slide } from "react-auto-image-slider";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./index.css"
const SliderBanner = () => {
  return (
    <div  className="slider-container" >
<ImageSlider effectDelay={500} autoPlayDelay={1500} effectDots={false}>
      <Slide>
        <img alt="img3" src="https://t4.ftcdn.net/jpg/05/06/88/17/360_F_506881751_RcKAh09KyRM5arR07239Pqqk8ogms9Te.jpg"   className="image-slider"/>
      </Slide >
      <Slide>
        <img alt="img2" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b530f7110494491.5feef8228f2b8.png"    className="image-slider"/>
      </Slide>
      <Slide>
        <img alt="img2" src="https://img.freepik.com/premium-vector/mega-sale-banner-with-red-ribbon-illustration_275806-126.jpg"  className="image-slider"/>
      </Slide>
      <Slide >
        <img alt="img1" src="https://bestmediainfo.com/uploads/2021/09/MobileAd_6.jpg"  className="image-slider"/>
      </Slide>
      <Slide>
        <img alt="img1" src="https://img.freepik.com/premium-vector/ad-banner-d…ectronic-product-advertising-design_626143-28.jpg"  className="image-slider" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg"  className="image-slider" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://t4.ftcdn.net/jpg/04/89/28/05/360_F_489280525_nISHfaWCctYBFlyYkTQUkzQwVOPWmyvp.jpg"  className="image-slider" />
      </Slide>
    </ImageSlider>
    </div>
    
  );
}

export default SliderBanner;*/

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const SliderBanner = () => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      Array: true,
      className: 'notes-slider',
      autoplay: true,
      autoplaySpeed: 2000,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        <div>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b530f7110494491.5feef8228f2b8.png" alt="img1" className='slider-image'/>
        </div>
        <div>
          <img src="https://img.freepik.com/premium-vector/mega-sale-banner-with-red-ribbon-illustration_275806-126.jpg" alt="img1" className='slider-image'/>
        </div>
        <div>
          <img src="https://bestmediainfo.com/uploads/2021/09/MobileAd_6.jpg" alt="img1" className='slider-image'/>
        </div>
        <div>
          <img src="https://img.freepik.com/premium-vector/ad-banner-d…ectronic-product-advertising-design_626143-28.jpg" alt="img1" className='slider-image'/>
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg" alt="img1" className='slider-image'/>
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/04/89/28/05/360_F_489280525_nISHfaWCctYBFlyYkTQUkzQwVOPWmyvp.jpg" alt="img1" className='slider-image'/>
        </div>
        
      </Slider>
    </div>
  )
}

export default SliderBanner