const Properties = {
  duration: 4000,
  transitionDuration: 400,
  infinite: true,
  prevArrow: (
    <div style={{ width: "20px", cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#37474f"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "20px", cursor: "pointer" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#37474f"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </div>
  ),
};
export default Properties;
