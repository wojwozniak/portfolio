import './animation-style.css';

const Overlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-background-light z-[1000000] overflow-hidden background-animation-class">
      <div className="animation-class">
        <p className="py-4 mt-2 font-light">wojwozniak</p>
      </div>
    </div>
  );
};

export default Overlay;