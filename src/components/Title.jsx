/* eslint-disable react/prop-types */
const Title = ({ title, top, size, width }) => {
  return (
    <h1
      className={` ${width && width} tracking-wide ${size ? size : "text-5xl md:text-4xl "}   mb-6 font-bold text-[#1b5bf7] ${top && top} md:text-left`}
    >
      {title}
    </h1>
  );
};

export default Title;
