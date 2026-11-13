import { useScroolAnimation } from "../hook/useScrollAnimation";
function AnimationScroll({ children }) {
  const ref = useScroolAnimation();
  return (
    <>
      <div ref={ref} className="box">
        {children}
      </div>
    </>
  );
}
export default AnimationScroll;
