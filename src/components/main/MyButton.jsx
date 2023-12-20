


export function MyButton({children, colorBlack = false}){
  const ButtonClass = colorBlack ?  "btn-white" : "btn-black";
  return (
    <a className={`btn ${ButtonClass} inline-block`} href="#">
      {children}
    </a>
  );

}
MyButton.propTypes = {
 children: Node,
 colorBlack: Boolean

};


export default MyButton;