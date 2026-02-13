export default function Home() {
  const placeholders = [
    { label: "Photo 1", classes: "top-8 left-14 -rotate-6" },
    { label: "Photo 2", classes: "top-10 right-14 rotate-6" },
    { label: "Photo 3", classes: "top-1/2 -translate-y-1/2 left-6 -rotate-3" },
    { label: "Photo 4", classes: "top-1/2 -translate-y-1/2 right-6 rotate-3" },
    { label: "Photo 5", classes: "bottom-10 left-16 rotate-4" },
    { label: "Photo 6", classes: "bottom-10 right-16 -rotate-4" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-pink-200">
      {placeholders.map((item) => (
        <div
          key={item.label}
          className={`absolute ${item.classes} flex h-40 w-40 items-center justify-center rounded-2xl border-4 border-pink-100/80 bg-pink-100/70 text-base font-semibold text-pink-900 shadow-xl sm:h-48 sm:w-48`}
        >
          {item.label}
        </div>
      ))}

      <div className="flex mt-20 flex-col items-center justify-center px-4 mb-10">
        <h1 className="mb-7 w-full max-w-xl text-left text-7xl text-black font-[family-name:var(--font-allura)]">
          Dear Caroline,
        </h1>
        <div className="w-full max-w-xl rounded-2xl border-pink-100 bg-pink-50/90 p-8 text-left text-lg font-medium leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          <br></br> <br></br>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </div>
      </div>
    </main>
  );
}
