import MemberPics from "./member.jpeg";

const Member = () => {
  return (
    <div className="band-info">
      <div className="band-member-card">
        <p>Name</p>
        <img src={MemberPics} alt="" />
      </div>
    </div>
  );
};

export default Member;
