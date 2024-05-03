import React from "react";

const Companies = () => {
  return (
    <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
      <div className="bg-[url('/companies-header-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[50vmin]"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[2.5vmax] font-bold text-neutral-100">Meet top game development companies</h1>
      </div>
    </main>
  );
};

export default Companies;
