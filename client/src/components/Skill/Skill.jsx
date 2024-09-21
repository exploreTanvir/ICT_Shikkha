import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import "./skill.css";

const Skill = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/auth/skills")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="skill pb-5">
            <Link to="/hand-note">
                <img className="banner wow fadeInUp" src={banner} alt="" />
            </Link>
            <Link to="/hand-note">
                <img className="banner2 wow fadeInUp" src={banner2} alt="" />
            </Link>
            <div className="faqTitle text-center pt-5 wow fadeInUp">
                <span>স্কিল ডেভেলপমেন্ট ও ক্যাটাগরি</span>
            </div>
            <div className="container">
                <div className="row">
                    {data.map((item, index) => (
                        <div key={index} className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
                            <Link to={item.src}>
                                <div className={item.class}>
                                    <img src={item.img} alt="" />
                                    <h2 className="fw-bold">{item.title}</h2>
                                    <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                                        <Link to={item.src} className="d-flex align-items-center gap-2">
                                            {item.btn} <i className="fa fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
