import React from 'react'
import Banner from '../components/home/banner'
import Collaboration from '../components/home/collaboration'
import Webuser from '../components/home/webuser'
import Step from '../components/home/step'
import Setisfation from '../components/home/setisfation'
import Review from '../components/home/review'
import Jobcet from '../components/home/jobcet'
import Jobcitys from '../components/home/jobcitys'
const Home = () => {
    return (
        <div className='' >
            <Banner />
            <Collaboration />
            <Webuser />
            <Step />
            <Setisfation />
            <Review />
            <Jobcet />
            <Jobcitys />
        </div>
    )
}

export default Home