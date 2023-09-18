import JobList from "./JobList";

import "./Job.css";

const majorJobList = [
  {
    id: 1,
    src: "img/jobs/logo-sankyu.png",
    name: "山九（株）鹿嶋支店",
    subName: "施工管理監督者",
    period: "2020. 12月 ~ 2022. 9月",
  },
  {
    id: 2,
    src: "img/jobs/logo-soka.png",
    name: "創価大学 (日本)",
    subName: "交換留学",
    period: "2018. 4月 ~ 2019. 2月",
  },
  {
    id: 3,
    src: "img/jobs/logo-army.png",
    name: "軍隊 (韓国)",
    subName: "陸軍",
    period: "2013. 7月 ~ 2015. 4月",
  },
  {
    id: 4,
    src: "img/jobs/logo-kyungnam.png",
    name: "Kyungnam University (韓国)",
    subName: "機械工学科卒業",
    period: "2012. 3月 ~ 2019. 8月",
  },
];

const Job = () => {
  return (
    <div className="about-jobs">
      <JobList jobList={majorJobList} />
    </div>
  );
};

export default Job;
