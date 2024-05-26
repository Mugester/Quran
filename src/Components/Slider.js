import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Images/quran_slider_1.jpeg'
import img2 from '../Images/quran_slider-2.jpg'
import img3 from '../Images/quran_slider-3.webp'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };

  return (
    <div className="dua-slider h-auto overflow-hidden mb-24 ">
      <Slider {...settings}>
        <div className='mb-10'>
        <h1 className='text-center text-5xl ' >Ayatul Kursi "آية الكرسي"</h1>
          <h3 className=' text-center mt-16 mx-12 text-4xl'>ٱللَّه لَاۤ إِلَـٰهَ إِلَّا هُوَ ٱلۡحَیُّ ٱلۡقَيُّومُۚ  لَا تَأۡخُذُهُۥ سِنَةٌ وَلَا نَوۡمࣱۚ لَّهُۥ مَا فِی ٱلسَّمَـٰوَتِ وَمَا فِی ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِی يَشۡفَعُ عِندَهُۥۤ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَیۡءࣲ مِّنۡ عِلۡمِهِۦۤ إِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَـٰوَ ٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِیُّ ٱلۡعَظِيمُ</h3>
        </div>
        <div>
        <h1 className='text-center text-5xl ' >Dua e Qunoot "دعائے قنوت"</h1> 
          <h3 className='text-center mt-16 mx-12 text-4xl'>اَللَّهُمَّ اِنَّا نَسۡتَعِيۡنُكَ وَنَسۡتَغْفِرُكَ وَنُؤۡمِنُ بِكَ وَنَتَوَكَّلُ عَلَيۡكَ وَنُثۡنِىۡ عَلَيۡكَ ٱلۡخَيۡرَ وَنَشۡكُرُكَ وَلَا نَكۡفُرُكَ وَنَخۡلَعُ وَنَتۡرُكُ مَنۡ يَّفۡجُرُكَ. اَللَّهُمَّ اِيَّاكَ نَعۡبُدُ وَلَكَ نُصَلِّئ وَنَسۡجُدُ وَاِلَيۡكَ نَسۡعٰى ونَحۡفِدُ ونَرۡجُوۡا رَحۡمَتَكَ وَنَخۡشٰى عَذَابَكَ اِنَّ عَذَابَكَ بِالۡكُفَّارِ مُلۡحِقٌٌ  </h3>
        </div>
        <div>
        <h1 className='text-center text-5xl ' >Tasbih Tarawih "تسبيح تراويح"</h1>
          <h3 className=' text-center mt-16 mx-12 text-4xl'>سُبْحانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ 
سُبْحانَ ذِي الْعِزَّةِ 
وَالْعَظْمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ 
وَالْكِبْرِياءِ وَالْجَبَرُوْتِ 
سُبْحانَ الْمَلِكِ الْحَيِّ الَّذِيْ لا يَنامُ 
وَلا يَمُوتُ سُبُّوْحٌ قُدُّوْسٌ رَبُّنا 
وَرَبُّ المْلائِكَةِ وَالرُّوْحِ 
اللَّهُمَّ أَجِرْنا مِنَ النّارِ 
يا مُجيرُ يا مُجيرُ يا مُجيرُ</h3>
        </div>
      </Slider>
      <br/>
    </div>
  );
}

export default SliderComponent;
