const list = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

const styles = {
  wrapper: {
    padding: 16,
    fontSize: 25,
  },
};
function StudentList(props) {
  return (
    <div style={styles.wrapper}>
      {list.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </div>
  );
}

export default StudentList;
