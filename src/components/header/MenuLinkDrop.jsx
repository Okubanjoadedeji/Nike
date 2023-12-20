
function MenuLinkDrop({ item, isConTitle = false }) {
  const Deter = isConTitle ? "dropmenu-content-title" : "dropmenu-content-link";
  return (
    //if isTitle render bold class
    <li className={Deter}>
      <a href={item.href}>{item.text}</a>
    </li>
  );
}
MenuLinkDrop.propTypes = {
  item: Object,
  isConTitle: Boolean,
};

export default MenuLinkDrop;
