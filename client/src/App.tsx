import { useQuery } from "@apollo/client";
import { get_UserAcount } from "./GraphQL/query";
import { Acount } from "./appInterface";

function App() {
  const { loading, error, data } = useQuery(get_UserAcount);

  if (loading) return <h1>Cargando datos</h1>;
  if (error) return <h1>Ocurrio un error</h1>;

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      {data.acount.map((e: Acount) => {
        return (
          <div key={`${e.id}`}>
            <p>Name: {`${e.first_name} ${e.last_name}`}</p>
            <p>Email: {e.email}</p>
            <p>Country: {e.country}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
