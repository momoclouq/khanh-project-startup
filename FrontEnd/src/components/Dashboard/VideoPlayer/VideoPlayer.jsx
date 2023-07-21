import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import { Player } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";

import { useNavigate, useParams } from "react-router-dom"

import YouTubeEmbed from 'react-youtube-embed';


const PageStyled = styled.div`
  width: 90%;
  margin: 52px 0px 0px 72px;
`;

export const VideoPlayer = () => {
  const { id } = useParams();
  const [course, setCourse] =   useState([])
  const [link, setLink] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/admin/courses/${id}`)
    .then(res=>res.json())
    .then((data)=>{
      setCourse(data);
      setLink(data.listOfVideo)
    }
  )
  } ,[id])
  console.log(course.listOfVideo)

  const linkArray = link.split(',');

  return (
    // <PageStyled>
    //   <h2>{linkArray}</h2>
    //   {linkArray?.map(video => {
    //   <iframe
    //     width="1280"
    //     height="720"
    //     src={video}
    //     title="Marvel Studios&#39; Avengers: Endgame - Official Trailer"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //   ></iframe>
    //   })}
    // </PageStyled>

    <div>
      <h2>Course List</h2>
      <ul>
        {linkArray.map((linkCom, index) => (
          <li key={index}>

              <YouTubeEmbed id={linkCom} />


          </li>
        ))}
      </ul>
    </div>
  );
};
