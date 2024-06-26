export default function TabButton({children, isSelected, ...props}) {
//   function clickHandler() {
//     console.log("Button clicked");
//   }
  return (
    <li>
      <button className={isSelected? "active": undefined} {...props}> {children}</button>
    </li>
  );
}
