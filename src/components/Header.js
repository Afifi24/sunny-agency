import React from 'react'
import styled from 'styled-components'
export default function Header({isopen,setisopen}) {
    const Open =()=>{
        setisopen(!isopen)
    }
  return (
    <Head>
      <nav>
        <img src="../images/logo.svg" alt="" />
        <ul className={`${isopen?'show':''}`}>
            <li >About</li>
            <li>Services</li>
            <li>Projects</li>
            <li className='active focus'>Contact</li>
        </ul>
       
      </nav>
      <div className="creative">
        <h1>We are creatives </h1>
        <img src="../images/icon-arrow-down.svg" alt="" />
      </div>
      <div onClick={Open} className="menu">
            <img src="../images/icon-hamburger.svg" alt="" />
        </div>
    </Head>
  )
}


// styled components

const Head = styled.div`
min-height: 100vh;
background-image: url('../images/desktop/image-header.jpg');
background-position:center;
background-repeat:no-repeat;
background-size:cover;
display: flex;
flex-direction: column;
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        li{
          margin-left: 1rem;
          cursor: pointer;
          font-size: 13px;
          color:#fff;
          padding: 0.6rem 1.8rem;
          border-radius: 20px;
          /* &:hover{
            background-color: #fff;
            color: #000;
            transition: 0.3s ease-out;
            
          } */
          
        }
        .active{
            background-color: #fff;
            color: #000;
            font-weight: bold;
           
          }
    }
}
.menu{
        position: absolute;
        right:1.2rem ;
        top: 1.2rem;
        cursor: pointer;
        @media(min-width:540px){
                display: none;
            }
       }
.creative{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
       text-transform:uppercase;
       color: #fff;
       letter-spacing: 10px;
       font-size: 3rem;
       text-align: center;
}
}
/* media query */
@media(max-width:706px) {
    nav{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .creative{
        h1{
            font-size: 2rem;
        }
    }
}
@media(max-width:540px){
    nav{
        margin-bottom: 3rem;
       
        img{
            position: absolute;
            left: 1.5rem;
            top: 1.5rem;
            width: 6rem;
        }
        ul{
            flex-direction: column;
            padding: 0;
            display: none;
         .focus{
            background-color: hsl(51, 100%, 49%);
         }
            li{
             
             margin: 0.5rem 0rem;
             color: #000;
            
            }
        }
        .show{
            height: 17rem;
            width: 20rem;
            background-color: #fff;
            z-index: 10;
            position: absolute;
            top: 4rem;
            display: flex;
            box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
          
        }
    }
    
}
`
