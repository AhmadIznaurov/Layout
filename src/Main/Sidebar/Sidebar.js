import  React from 'react';
import s from './Sidebar.module.css';
import backImg from '../../img/background.png'
import MediaB from '../../img/MediaBackground.png'

const Sidebar = () => {
    return (
            <div className={s.sidebar_wrapper}>
    <aside className={s.sidebar}>
        <div className={s.section_1}>
            <div className={s.content}>
                <p>Find a gift for your wife or girlfriend</p>
                <p className={s.content_p}>Struggling to find a gift for your wife or girlfriend?
                    No problem!</p>
                <button className={s.section_1_button}>FIND GIFT NOW</button>
            </div>
        </div>
        <div className={s.section_2}>
            <img src={backImg} className={s.sidebar_img}/>
        </div>
    </aside>
                <div className={s.sidebar_wrapper_2}>
                    <div className={s.sidebar_2}>
                        <div className={s.section_3}>
                            <img src={MediaB}/>
                        </div>
                        <div className={s.section_4}>
                            <p>How we work</p>
                            <p>We’ve actually already asked hundreds of <br/> women what they want, and made a database <br/> with the results.
                                All you have to do is take our <br/> short survey that only takes seconds, and our  <br/> proprietary algorithm
                                will match you with a few <br/> perfect gift options.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>

</div>



    )
}

export default  Sidebar;