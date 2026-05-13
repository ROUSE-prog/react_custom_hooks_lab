import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage(
    "serviceNumber",
    ""
  );

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        data-testid="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="serviceNumber">Service Number</label>
      <input
        id="serviceNumber"
        data-testid="serviceNumber"
        type="text"
        value={serviceNumber}
        onChange={(e) => setServiceNumber(e.target.value)}
      />
    </form>
  );
}

export default Form;