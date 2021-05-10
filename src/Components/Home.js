import React from 'react'
import { Image,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./MyStyle.css"
function Home() {
    return (
        <>
           <section id="header" className="">
            <div className="container-fluid">
                <div className="row pt-5 mt-lg-5">
                    <div className="col-lg-6 col-12 text-center order-2 order-lg-1">
                    <Image className="d-none d-lg-block" src="images/work.png"/>
                    <Image className=".d-lg-none" src="images/workd.png"/>
                    </div>
                    <div className="col-12 col-lg-4 offset-lg-1 text-left order-1 order-lg-2">
                    <h1 className="display-4 font-weight-bold">Where Work Happens</h1>
        <p>When your team needs to kick off a project, hire a new employee, deploy some code, recive a sales contract, finalize next year's budget reduce on A/B test, plan your next office opening and more, slack has your converted.</p>
        <Button type="submit" className="btn text-white btn-block d-block d-lg-none bcv" >GET STARTED</Button>
        <Button type="submit" className="btn text-white d-none d-lg-block bcv " >GET STARTED</Button>
        <p className="fs">Already using slack? <Link className="bc">Sign In</Link></p>
                    </div>
                </div>

                <div className="row">
    <div className="col-12 text-center bg-light">
        <h2 className="pt-5">You're in good company</h2>
        <p className="fs" >Millions of people around the world have already made slack the place where their work happens. </p>
        <Button type="submit" className="btn bg-white  d-none d-lg-block m-auto cb ">DISCOVER WHY</Button>
        <Button type="submit" className="btn bg-white btn-block d-block d-lg-none cb">DISCOVER WHY</Button>
    </div>
</div>
<div className="row text-center bg-light pt-5">
    <div className="col-lg-4 pb-3">
        <Image src="images/airbnblogo.png"/>
    </div>
     <div className="col-lg-4 pb-3 "> 
          <Image src="images/capitalone.png"/>
     </div>
     <div className="col-lg-4 pb-3">     
        <Image  src="images/HarvardUniversity.png"/>
     </div>
</div>
<div className="row text-center bg-light pt-3 pb-5">
    <div className="col-lg-4 pb-3">
        <Image src="images/losangelestimes.png"/>
    </div> 
    <div className="col-lg-4 pb-3">      
        <Image src="images/oraclelogo.png"/>
    </div>
    <div className="col-lg-4 ">    
        <Image src="images/TMlogo.png"/>
    </div>    
</div>    
            </div>
           </section>
        </>
    )
}

export default Home

