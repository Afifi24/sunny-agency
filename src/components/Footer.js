import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Footerstyled>
      <Images>
        <Img1><img src="../images/desktop/image-gallery-milkbottles.jpg" alt="" /></Img1>
        <Img2><img src="../images/desktop/image-gallery-orange.jpg" alt="" /></Img2>
        <Img3>  <img src="../images/desktop/image-gallery-cone.jpg" alt="" /></Img3>
        <Img4> <img src="../images/desktop/image-gallery-sugarcubes.jpg" alt="" /></Img4>
      </Images>
    </Footerstyled>
  )
}
// styled-components

const Footerstyled = styled.div`
`
const Images = styled.div`
display: grid;
/* padding:1rem 3rem; */
grid-template-columns:repeat(4,1fr);
grid-template-areas: 
"img1 img2 img3 img4"
;
@media(max-width:690px){
   grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 
    "img1 img2"
    "img3 img4"
    ;
}
`
const Img1 = styled.div`
grid-area: img1;
img{
    width: 100%;
}
`
const Img2 = styled.div`
grid-area: img2;
img{
    width: 100%;
}


`
const Img3 = styled.div`
grid-area: img3;
img{
    width: 100%;
}


`
const Img4 = styled.div`
grid-area: img4;
img{
    width: 100%;
}



`
