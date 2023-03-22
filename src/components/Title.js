const Title = ({ blackTitle, blueTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {blackTitle} <span>{blueTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
