import React from "react";
import "../styles/ListPlanner.css";
import Banner from '../styles/banner-planner-1.jpg'

export default function ListPlanner() {
  let allplans = [
    {
      where: "London",
      fromWhen: "12/10",
      toWhen: "15/10",
      img:
        "https://images.unsplash.com/photo-1473896100090-53523650d4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
    },
  ];
  const Plannerlist = allplans.map((plan) => {
    return (
      <div className="plannerlistelement"
        key={plan.where}
        style={{ display: "flex" }}
      >
        <img src={plan.img} alt="travel"></img>
        <div>
          <h3>{plan.where}</h3>
          <p>
            {plan.fromWhen} to {plan.toWhen}
          </p>
        </div>
      </div>
    );
  });
  return (

<section className="Listplanner-header-grid">
  <div className="banner-home">
    <img src={Banner} alt="logo" className='img-banner' />
  </div>

  <section className="container-listplanner">
    <div className="listplanner-grid">
    <h2 className="title-planner">Wewe, Lorem ipsum</h2>
    </div>
    <div className="planner-travel-grid">
        <div className="planner-travel">
          {Plannerlist}
        </div>
        <div className="planner-travel">
         
        </div>
    </div>
  </section>

</section>






    // <section className="Listplanner-header-grid">
    //     <div className="banner-home">
    //       <img src={Banner} alt="logo" className='img-banner' />
    //     </div>

    //     <div className="container-listplanner">
    //       <div className="listplanner-grid">
    //         <h2 className="title-planner">Wewe, Lorem ipsum</h2>
    //       </div>

    //       <div className="list-planner">
    //       <div>{Plannerlist}</div>

          

    //       </div>
    //     </div>
        
    //     <div className="plannerlistelement" style={{ display: "flex" }}>
    //       <img
    //         src="https://images.unsplash.com/photo-1468530986413-2c93495ed020?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
    //         alt="travel"
    //       ></img>
    //       <div>
    //         <h3>Let's go to a new adventure!!</h3>
    //         <p>Click here to start organizing your next big adventure</p>
    //       </div>
    //     </div>
    // </section>
  );
}


{/* <section key={element.name} className="previewrequest-grid">
        <div  className='previewrequest' style={{display:'flex'}} 
          onClick={()=>GoTo(props.path+'/'+element.id+'/'+element.name+'/'+element.where)}>
        
          
          <div style={style}  className='imgrequestpreview'/>
            <div className="sectionelementtitlerequest-grid">
              <h3 className="sectionelementtitlerequest">
                • {element.name} is asking help for { element.where}.
              </h3>
              <p className="info-request">
                {element.text}
              </p>
            </div>

        </div>
</section> */}