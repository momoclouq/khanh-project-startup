import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { Button } from "components/Button/Button";
import personAvt from "../../../assets/images/personAvt.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const StyleCourseDetailsBanner = styled.div`
  height: 1196px;
  padding-top: 176px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: 140px;
  .wrapper-popular-categlories {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }
  .categlory {
    color: #96989b;
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .banner-title {
    color: #504e4e;
    font-size: 60px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 82px;
  }
  .description {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 196.5%;
    margin-top: 42px;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 42px;
  }
  .rate {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rating-number,
  .rating-number span {
    color: #2e2c2c;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .rating-number {
    font-size: 25px;
  }
  .rating-number span {
    font-size: 41px;
  }
  .reviews-count {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 196.5%;
  }
  .enroll-count {
    color: #96989b;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .mentor {
    display: flex;
    align-items: flex-end;
    gap: 34px;
    margin-top: 80px;
  }
  .mentor-name {
    color: #96989b;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .mentor-name span {
    color: #2e2c2c;
  }
  .start-group {
    display: flex;
    align-items: center;
    gap: 43px;
    margin-top: 105px;
  }
  .start-group-text {
    color: #2e2c2c;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  Button {
    color: #fff;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  @media screen and (max-width: 1315px) {
    width: 100%;
    margin-left: 0px;
    .wrapper-popular-categlories{
      justify-content: space-evenly;
      align-items: center;
    }
    .banner-title, .description{
      align-items: center;
      text-align: center;
    }
    .mentor, .start-group{
      justify-content: center;
    }
    .rating{
      justify-content: space-evenly;
    }
  }
  @media screen and (max-width: 797px) {
    .rating, .start-group{
      flex-direction: column;
    }
  }
`;

export const CourseDetailsBanner = () => {
  const { id,orderId } = useParams();
  const [course, setCourse] =   useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/admin/courses/${id}`)
    .then(res=>res.json())
    .then((data)=>{
      setCourse(data);
    }
  )
  } ,[id])
  console.log( course)

  const navi = useNavigate();
  return (
    <StyleCourseDetailsBanner>
      <div className="wrapper-popular-categlories">
        <div className="categlory">#Popular categories</div>
        <div className="categlory">#Computer science</div>
        <div className="categlory">#Mobile and web development</div>
        <div className="categlory">#Programming</div>
      </div>
      <div className="banner-title">
        {course.name}
      </div>
      <div className="description">
        {course.desciption}{" "}
      </div>
      <div className="rating">
        <div className="rate">
          <StarRatings
            rating={course.rating}
            starDimension="35px"
            starSpacing="5px"
            starRatedColor="#FED66F"
          />
          <div className="rating-number">
            <span>{course.rating}</span>/5.0
          </div>
        </div>
        <div className="reviews-count">722 reviews</div>
        <div className="enroll-count">{course.enroll} enrolled</div>
      </div>
      <div className="mentor">
        <img src={personAvt} alt="" />
        <div className="mentor-name">
          Taught by <span>Diallo Liam</span>
        </div>
      </div>
      <div className="start-group">
        <div className="start-group-text">Start as early as Today</div>
        
        {orderId ? (
          <Button
          bgColor="#0C4CA3"
          width="251px"
          height="81px"
          borderRadius="55px"
          fontSize="22px"
          onClick={() => navi(`/mainboard/video-player/${id}`)}
        >
           Learning
        </Button>
        ):(
          <></>
        )}
      </div>
    </StyleCourseDetailsBanner>
  );
};
