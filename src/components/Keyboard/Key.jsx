export default function Key({ value, spacer }) {
  const space = spacer ? "flex-1.5" :  "flex-1"
  return (
    <button
      className={`font-bold h-[58px] cursor-pointer rounded select-none bg-[#818384]
        flex ${space} justify-center items-center uppercase text-[13.333px]`}>
        { value }
    </button>
  );
}
