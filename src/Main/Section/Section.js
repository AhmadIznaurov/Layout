import  React from 'react';
import s from './Section.module.css';
import image_1 from '../../img/Rectangle1.png';
import image_2 from '../../img/Rectangle2.png';
import image_3 from '../../img/Rectangle3.png';
import image_4 from '../../img/Rectangle4.png'



const Section = () => {
    return (
        <section className={s.section_wrapper}>
          <div className={s.text_section}>
              <p>Gifts for all Occasions</p>
              <p>“Try our web app to find the best gifts for all occasions”</p>
          </div>
           <div className={s.photo_section}>
               <div className={s.photo_text}>
                   <div className={s.image_1}>
                       <img src={image_1}/>
                   </div>
                   <div>
                       <p>Birthday</p>
                       <p className={s.see_more}>See More ›</p>
                   </div>
               </div>
               <div className={s.photo_text}>
                   <div className={s.image_2}>
                       <img src={image_2}/>
                   </div>
                   <div>
                       <p>Anniversary</p>
                       <p className={s.see_more}>See More ›</p>
                   </div>
               </div>
               <div className={s.photo_text}>
                   <div className={s.image_3}>
                       <img src={image_3}/>
                   </div>
                   <div>
                       <p>Valentine's Day</p>
                       <p className={s.see_more}>See More ›</p>
                   </div>
               </div>
               <div className={s.photo_text}>
                   <div className={s.image_4}>
                       <img src={image_4}/>
                   </div>
                   <div>
                       <p>Christmas</p>
                       <p className={s.see_more}>See More ›</p>
                   </div>
               </div>
           </div>
            <aside className={s.section_aside}>
                <div className={s.section_aside_block}>
                        <p>Ready to get started?</p>
                        <p>Sign up or contact us</p>
                </div>
                <div className={s.button_display}>
                    <button>FIND GIFT NOW</button>
                    <button>HOW IT WORKS</button>
                </div>

            </aside>
        </section>



    )
}

export default  Section;