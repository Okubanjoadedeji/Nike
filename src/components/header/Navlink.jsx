

function Navlink({ data, isTitle = false }) {
  const style = isTitle ? "menu-column-title" : "menu-column-link"
  return (
    //if isTitle render bold class
    <li className={style}>
      <a href={data.href}>{data.text}</a>
    </li>
  );
}
Navlink.propTypes = {
  data: Object,
  isTitle: Boolean,
}

export default Navlink