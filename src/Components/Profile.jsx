import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/profile.css";

const Profile = (props) => {
  const navigate = useNavigate();
  const [User, setUser] = useState("");
  const Authenticate = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}makecv`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log("Response in Mainpage ", res);
      if (res.status !== 200) {
        toast.warn("Please Login First", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        navigate("../login", { replace: true });
        return;
      }
      else {
        props.setToggle(true);
      }
      const resJson = await res.json();
      console.log(resJson);
      setUser(resJson.crrUser);
      console.log("User is : ", resJson);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Authenticate();
  }, []);
  return (
    User && (
      <>
        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="">
              </div>
              <div class="row-md-6">
                <div class="profile-head">
                  <h3 id="name">
                    {User.name}
                  </h3>
                  <p>{User.about}</p>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div className="profile-work mt-0">
                  <h5>Certificate</h5>
                  {
                    User.certificates.length > 0 ?
                      User.certificates.map((certy) => {
                        return (
                          <p className="mb-1">{certy}</p>
                        )
                      }) : <p>You haven't added any certificates</p>
                  }
                </div>
                <div className="profile-work mt-0">
                  <h5>Projects</h5>
                  {User.ptitle1 ? (<p className="mb-1">{User.ptitle1}</p>) : "You haven't added any projects"}
                  {User.ptitle2 ? (<p className="mb-1">{User.ptitle2}</p>) : ""}
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row">
                      <div class="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.username}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Name</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.name}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.email}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.number}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Address</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.address}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Portfolio</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.portfolio}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Github</label>
                      </div>
                      <div class="col-md-6">
                        <p>{User.github}</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="row">
                      <div class="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div class="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div class="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div class="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div class="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label>Your Bio</label><br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>)
  );
};

export default Profile;
