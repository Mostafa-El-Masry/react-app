const ListGroup = () => {
  let cities = ["New york", "D.C", "Los Anglos", "Cairo"];

  return (
    <>
      <h1>List</h1>
      <div>
        <ul className="list-group">
          {cities.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListGroup;
