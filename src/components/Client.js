import React from 'react'
import styled from 'styled-components'
export default function Client() {
  return (
    <Clientstyled>
        <h4>CLIENT TESTIMONIALS</h4>
        <div className="client">
      <div className="emily">
        <img src="../images/image-emily.jpg" alt="" />
        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
        <h6>Emily R.</h6>
        <p><span>Markiting Director</span></p>
      </div>
      <div className="thomas">
      <img src="../images/image-thomas.jpg" alt="" />
        <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
        <h6>Thomas S.</h6>
        <p><span>Chief Operating Officer</span></p>
      </div>
      <div className="jennie">
      <img src="../images/image-jennie.jpg" alt="" />
        <p>Incredible end result! Our sales increased over 400% when we worked with sunnyside. Highly recommended
        </p>
        <h6>Jennie F.</h6>
        <p><span>Business Owner</span></p>
      </div>
      </div>
    </Clientstyled>
  )
}


// styled-components

const Clientstyled = styled.div`
min-height: 70vh;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
margin-bottom: 3rem;
h4{
    letter-spacing: 6px;
    opacity: 0.5;
    text-shadow:1px 1px 10px rgba(0,0,0,0.4);
}
.client{

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0rem 5rem;
    gap: 2rem;
    flex-wrap: wrap;
    p{
        font-size: 11px;
        width: 250px;
        text-align: center;
        font-family: 'Barlow', sans-serif;
        line-height: 20px;
        font-weight: 600;
        opacity: 0.5;
       span{
        opacity: 0.5;
       }
    }
    img{
        width: 60px;
        border-radius: 50%;
    }
    .emily{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    }
    .thomas{
        display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    }
    .jennie{
        display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    }
}
`