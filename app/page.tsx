export default async function HomePage() {
  return (
    <main
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl">
          This is the home page of my portfolio website.
        </p>
      </div>
    </main>
  );
}
