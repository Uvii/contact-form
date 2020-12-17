import React from 'react';

const ProfileInfo = (props) => {
    const { values } = props
    console.log('values', values);
    return(
        <section className="profile-container">
            <div className="profile">
            <div className="profile-head"></div>

            <div className="profile-image">
                <img src="personalPic.jpg" />
            </div>

            <div className="profile-info">
                <h1 className="userName"> {values.fullName} </h1>
                <div className="userMail"> {values.mailID} </div>
                <div className="userNumber"> {values.mobileNumber} </div>
            </div>
            </div>
        </section>
    )
}

export default ProfileInfo;
