// function Header() {
//   return (
//     <header className="bg-transparent backdrop-blur-md text-white h-[60px] md:h-[80px] py-2 border-b border-white/20 flex items-end font-medium tracking-wider md:text-3xl px-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
//         ExyRead
//       </h1>
//     </header>
//   );
// }

// export default Header;

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md text-white h-[70px] md:h-[90px] flex items-center border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
          ExyRead
        </h1>
      </div>
    </header>
  );
}
export default Header;
