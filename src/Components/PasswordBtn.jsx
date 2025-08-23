import { useRef } from "react";

const PasswordBtn = () => {
  const iconRef = useRef(null);

  const handleClick = () => {
    if (iconRef.current) {
      iconRef.current.play(); // click pe play kare
    }
  };

  const handleHover = () => {
    if (iconRef.current) {
      iconRef.current.play(); // button hover pe bhi play kare
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleHover} // button hover pe bhi trigger
      className="bg-green-500 px-4 py-2 hover:bg-green-400 rounded-2xl flex items-center justify-center text-black font-bold gap-2"
    >
      <lord-icon
        ref={iconRef}
        src="https://cdn.lordicon.com/vjgknpfx.json"
        trigger="hover"  // keep hover, so icon self-hover bhi chalega
        colors="primary:#000000,secondary:#000000"
        style={{ width: "30px", height: "30px" }}
      ></lord-icon>
      ADD PASSWORD
    </button>
  );
};

export default PasswordBtn;
