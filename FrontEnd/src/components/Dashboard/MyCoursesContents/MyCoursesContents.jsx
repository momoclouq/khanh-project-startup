import styled from "styled-components";
import { DropdownSelector } from "../Selector";
import { Button } from "components/Button/Button";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card } from "../../Card/Card";

import avatar1 from "assets/images/avatars/avatar1.svg";

import axios from "axios";

const PageStyled = styled.div`
  h3 {
    color: #464444;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 40px 0px 13px 0px;
    min-width: 102px;
  }
  .filter-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .filter-button {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 27px;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 20px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
  .card-test {
    width: 375px;
    height: 422px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 33px;
    box-shadow:
      0px 4px 34px 0px rgba(0, 0, 0, 0.05),
      0px -4px 34px 0px rgba(0, 0, 0, 0.05);
  }
  .cards-wrapper {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const MyCoursesContents = () => {
  const { orderId } = useParams();

  const [courses, setCourses] = useState([]);

  const [orders, setOrders] = useState([]);
  const [charArray, setCharAray] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/order/${orderId}`)
      .then((response) => {
        setOrders(response.data);
        setCharAray(response.data.courses.replace(/,/g, ""));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("http://localhost:8080/admin/courses")
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      });
  }, []);

  const selectedCourses = courses.filter((course) =>
    charArray.includes(course.courseId)
  );
  console.log(selectedCourses);
  // const numbers = text.replace(/,/g, '');
  // console.log(typeof numbers)
  // const numbers = text.split(/\D+/).map((num) => parseInt(num)).filter((num) => !isNaN(num));
  // console.log(numbers)
  return (
    <PageStyled>
      <h3>Filter</h3>
      <div className="filter-group">
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Class" />
      </div>
      <div className="filter-button">
        <Button
          width="165px"
          height="52px"
          borderRadius="37px"
          bgColor="#0C4CA3"
        >
          Filter
        </Button>
      </div>
      <div>
        <h3>ORDER ID: {orderId}</h3>
      </div>
      <div></div>
      <div className="cards-wrapper">
        {selectedCourses.map((course) => (
          <Card
            className="product"
            orderId={orderId}
            id={course.courseId}
            avatar={avatar1}
            tutorName={"Diallo Liam"}
            courseName={course.name}
            rating={course.rating}
          />
        ))}
      </div>
    </PageStyled>
  );
};
