import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
  const { id } = useParams();
  const obj = useOutletContext(); /* Takes data from outlet */
  return (
    <h1>
      Book {id} {obj.hello}
    </h1>
  );
}
