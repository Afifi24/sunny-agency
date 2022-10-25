import React from 'react'
import styled from 'styled-components'
export default function Container() {
  return (
    <Content>
      
        <Brand>
           <div className="bra">
           <h2>Transform your <br /> brand</h2>
            <p>We are a full-service creative agency specializing in helping brands growth fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
                <h6>LEARN MORE</h6>
           </div>
        </Brand>
       <Transform>
       <img src="../images/desktop/image-transform.jpg" alt="" />
       </Transform>
       <Stand>
        <img src="../images/desktop/image-stand-out.jpg" alt="" />

       </Stand>
       <Hello>
            <div className="helo">
            <h2>Stand out to the right <br /> audience</h2>
            <p>We are a full-service creative agency specializing in helping brands growth fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
                <h6>LEARN MORE</h6>
            </div>
        </Hello>
        <Graphique>
        <img src="../images/desktop/image-graphic-design.jpg" alt="" />
        <div className="graph">
            <h4>Graphic Design</h4>
            <p>Great design you memorable. We deliver  artwork that undescors you brsnd message  and captures potential clients attantion.</p>
        </div>
        </Graphique>
        <Photographie>
        <img src="../images/desktop/image-photography.jpg" alt="" />
          <div className="photo">
            <h4>Photography</h4>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </Photographie>
       
      
    </Content>
  )
}


// styled- components

const Content = styled.div`
    display: grid;
    grid-template-columns:repeat(2,1fr); 
    grid-template-areas: 
    "brand transformm"
    "stand hello "
    "graphique photographie "
    ;
    /* media query */
    @media(max-width:656px){
    grid-template-columns:repeat(1,1fr); 

        grid-template-areas:
        "transformm"
        "brand"
        "stand"
        "hello"
        "graphique"
        "photographie"
        
        ;
    }
`
const Brand = styled.div`
grid-area: brand;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
/* background-color: lightblue; */
p{
    width: 20rem;
    font-size: 13px;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    opacity: 0.5;
}
h6{
    text-decoration: underline;
    cursor: pointer;
}
@media(max-width:656px){
    text-align: center;
}
`
const Hello = styled.div`
grid-area: hello;
/* background-color: beige; */
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
p{
    width: 20rem;
   font-size: 13px;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
        opacity: 0.5;

}
h6{
    text-decoration: underline;
    cursor: pointer;

}
@media(max-width:656px){
    text-align: center;
}
`
const Transform = styled.div`
grid-area: transformm;
img{
    width: 100%;
}

`
const Stand = styled.div`
grid-area: stand;
img{
    width: 100%;
}




`
const Graphique = styled.div`
grid-area: graphique;
position: relative;
img{
    width: 100%;

}
.graph{
    position:absolute;
    bottom: 5%;
    display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
p{
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
        opacity: 0.5;
        padding: 0rem 4rem;
        font-size: 13px;
        
    @media(max-width:656px){
font-size: 11px;
padding: 0rem 4rem;

}
}
}

`
const Photographie = styled.div`
grid-area: photographie;
position: relative;
img{
    width: 100%;
}
.photo{
    position: absolute;
   bottom :5%;
   display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;

p{
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
        opacity: 0.5;
        font-size: 13px;

        padding: 0rem 4rem;
    @media(max-width:656px){
font-size: 11px;
padding: 0rem 3rem;

}
}
}
`