function NameCard({ person }) {
  const { name, age, interest, color } = person;
  return (
    <div className="name-card" style={{ backgroundColor: color }}>
      <div>Name: {name} </div>
      <div>Age: {age} </div>
      <div>Hobby: {interest} </div>
    </div>
  );
}

export default NameCard;
