import styled from "styled-components"
import courseImage1 from 'assets/images/courses/course1.svg'
import { useNavigate } from 'react-router-dom';

import './card.css'
const CardStyled = styled.div`
    width: 100%;
    width: 375px;
    /* height: 513px; */
    border-radius: 10px;
    box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.05), 0px -4px 34px 0px rgba(0, 0, 0, 0.05);
    margin-right:30px;
    margin-bottom: 33px;
    .thumbnail img{
        width: 100%;
    }
    .tutorInfo{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 8px;
        margin-left: 32px;
    }
    .tutorName{
        color: #96989B;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-left: 20px;
    }
    .courseName{
        color: #504E4E;
        font-size: 19px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 0 46px;
    }
    .rating{
        padding: 35px 46px;
        color: #2E2C2C;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        display: flex;
        flex-direction: row;
    }
    .rating5{
        font-size: 13px;
    }
`

export const Card = ({ id,orderId,avatar, tutorName, courseName, rating }) => {
    const navigate = useNavigate();

  const handleClick = () => {
    if(!orderId){
    const url = `/coursedetails/${id}`;

    // Navigate to the new page
    navigate(url);
    } else{
        const urlWithOrder = `/coursedetails/${orderId}/${id}`;

        // Navigate to the new page
        navigate(urlWithOrder);  
    }
    
  }

  const handleMouseEnter = () => {
    // Update the cursor style when the mouse enters the element
    document.body.style.cursor = 'pointer';
  };

  const handleMouseLeave = () => {
    // Reset the cursor style when the mouse leaves the element
    document.body.style.cursor = 'auto';
  };
    return <CardStyled>
        <div className="img">
        <div className="thumbnail">
            <img src={courseImage1} />
        </div>
            
            <div className="tutorInfo">
                <img src={avatar} />
                <p className="tutorName">{tutorName}</p>
            </div>
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <p onClick={handleClick} className="courseName">{courseName}</p>
            </div>
            <div className="rating">
                <p>{rating}<span className="rating5">/5.0</span></p>
                <div className="Stars" style={{ ratingStart: rating }}></div>

            </div>
        </div>
    </CardStyled>
}