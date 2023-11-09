import HomeNav from "../components/HomeNav";
function ErrorPage() {
  return (
    <div>
      <HomeNav />
      <div className="flex items-center justify-center gap-4 h-screen flex-col bg-violet-200 p-8">
        <h2 className="text-6xl max-sm:text-lg">404 Error</h2>
        <p className="text-center text-sm">
          Sorry we could not find this page. Use the navigation above to search
          for a page!
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
