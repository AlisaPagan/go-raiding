import { DNA } from "react-loader-spinner";

function Loader() {
  return (
    <DNA
      width={80}
      dnaColorOne="var(--muted-blue)"
      dnaColorTwo="var(--button)"
      ariaLabel="Loading"
    />
  );
}

export default Loader;
