import React from 'react'
import styled from 'styled-components'
export default function Footer2() {
  return (
    <Foot>
      <img src="../images/logo.svg" alt="" />
     
     <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
    
      <div className="social-media">
        <img src="../images/icon-facebook.svg" alt="" />
        <img src="../images/icon-instagram.svg" alt="" />
        <img src="../images/icon-twitter.svg" alt="" />
        <img src="../images/icon-pinterest.svg" alt="" />
      </div>
    </Foot>
  )
}

// styled-components

const Foot = styled.div`
min-height: 20vh;
background-color: hsl(168, 34%, 41%);
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
padding: 2rem 0rem;
color:hsl(167, 40%, 24%);


    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Barlow', sans-serif;
        color:hsl(167, 40%, 24%);
        li{
            margin-right: 3rem;
            font-size: 12px;
            cursor: pointer;
        }
    }
    .social-media{
        img{
            margin: 1rem;
            cursor: pointer;
        }
    }


`
