const AppDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log("Params ID: ", id);
  return (
    <div>
      <h2 className="text-2xl font-bold">This is App detail Page</h2>
    </div>
  );
};

export default AppDetailPage;
