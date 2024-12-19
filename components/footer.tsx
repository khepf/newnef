  export default function TheFooter() {
    return (
        <footer className="flex items-center justify-center bg-white">
            <h1 className="text-2xl font-bold text-gray-400">&copy; {new Date().getFullYear()} Nick Erdy Foundation | All Rights
            Reserved</h1>
        </footer>
      );
  }