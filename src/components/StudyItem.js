import React, { useEffect, useState } from 'react';
import studystyle from '../css/Study.module.css';
import example1 from '../img/example1.png';
import { Link } from 'react-router-dom';

const StudyItem = ({ study }) => {
  return (
    <Link to={`/study_main/${study.id}`} style={{ textDecoration: 'none' }}>
      <div id={studystyle.studyItem}>
        <div id={studystyle.studyItemLeft}>
          <img alt="스터디 사진 예시" src={example1} width="300px"></img>
        </div>
        <div id={studystyle.studyItemRight}>
          <h2 id={studystyle.title}>{study.title}</h2>
          <table>
            <tbody class={studystyle.table}>
              <tr>
                <th>작성자</th>
                <td>{study.username}</td>
              </tr>
              <tr>
                <th>날짜</th>
                <td>{study.studyDate}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <div>
                    {study.studyText.length < 73
                      ? study.studyText
                      : study.studyText.slice(0, 70) + '...'}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
};

export default StudyItem;
