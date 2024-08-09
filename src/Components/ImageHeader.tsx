
function ImageHeader() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <img
        className="w-16 h-16 object-contain"
        src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
        alt="TypeScript"
      />
      <span className="text-3xl font-bold text-indigo-400">+</span>
      <img
        className="w-16 h-16 object-contain"
        src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
        alt="React"
      />
    </div>
  );
}

export default ImageHeader;